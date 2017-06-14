'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);

router.put('/:id/phoneinfo', auth.isAuthenticated(), controller.changePhoneInfo);  // added phoneinfo route 5-1-17
router.put('/:id/changerole', auth.isAuthenticated(), controller.changeRole);  // added changerole route 6-10-17

router.put('/:id/updateRole', auth.isAuthenticated(), controller.updateRole);  // added updateRole route 6-10-17

router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
router.get('/:id/showAll', auth.isAuthenticated(), controller.showAll);

module.exports = router;


