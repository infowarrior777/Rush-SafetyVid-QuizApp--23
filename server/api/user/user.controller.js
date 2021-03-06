'use strict';

import User from './user.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    return res.status(statusCode).json(err);
  }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    return res.status(statusCode).send(err);
  };
}

/**
 * Get list of users
 * restriction: 'admin'
 */
export function index(req, res) {
  return User.find({}, '-salt -password').exec()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(handleError(res));
}

/**
 * Creates a new user
 */
export function create(req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.save()
    .then(function(user) {
      var token = jwt.sign({ _id: user._id }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      res.json({ token });
    })
    .catch(validationError(res));
}

/**
 * Get a single user
 */
export function show(req, res, next) {
  var userId = req.params.id;

  return User.findById(userId).exec()
    .then(user => {
      if (!user) {
        return res.status(404).end();
      }
      res.json(user.profile);
    })
    .catch(err => next(err));
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
export function destroy(req, res) {
  return User.findByIdAndRemove(req.params.id).exec()
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
}

/**
 * Change a users password
 */
export function changePassword(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  return User.findById(userId).exec()
    .then(user => {
      if (user.authenticate(oldPass)) {
        user.password = newPass;
        return user.save()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
}



//*************************************************************************
/**
 * Change a users custom phone info added 5-1-17    
 */
export function changePhoneInfo(req, res, next) {
   console.log('this is the req.body.phoneinfo', req.body.phoneinfo);
  var userId = req.user._id;
  var phoneinfo1 = req.body.phoneinfo;
  console.log('this is the phoneinfo1', phoneinfo1);
  // console.log('this is the req.body', req.body);
  // var newPass = String(req.body.newPassword);

  return User.findById(userId).exec()
    .then(user => {
      if (phoneinfo1) {
        console.log('inside changePhoneInfo function before posting', phoneinfo1);
        user.phoneinfo.svidscore = phoneinfo1.svidscore || user.phoneinfo.svidscore;
        user.phoneinfo.typingtest = phoneinfo1.typingtest || user.phoneinfo.typingtest;
        // added logical operators to phoneinfo data model to keep it from overwrighting other data 6-18-17 
        return user.save()
          .then(() => {
            console.log('Success, after posting', phoneinfo1);
            res.status(204).end();
          })
          .catch(err => next(err));
      } else {
        return res.status(403).end();
      }
    });
}




//*************************************************************************
/**
 * Change a users role with a button click function added 6-10-17    
 */
export function changeRole(req, res, next) {
   console.log('this is the req.body.role', req.body.role);
  var userId = req.user._id;
  var newrole1 = req.body.role;
  console.log('this is the newrole1', newrole1);
  // console.log('this is the req.body', req.body);
  // var newPass = String(req.body.newPassword);

  return User.findById(userId).exec()
    .then(user => {
      if (newrole1) {
        console.log('inside changeRole function before posting', newrole1);
        user.role = newrole1;
        return user.save()
          .then(() => {
            console.log('Success, after posting', newrole1);
            res.status(204).end();
          })
          .catch(err => next(err));
      } else {
        return res.status(403).end();
      }
    });
}


//*************************************************************************

// added updateRole function to user.controller.js to change selected user to coord role 6-13-17
// takes the id from the req.params from the auth.serve.js update role function and puts them into userID
// and newrole1 and updates that selected user's role to coord


export function updateRole(req, res, next) {
   console.log('this is the req.body', req.body);
   console.log('this is the req.body.user.role', req.body.role);
   console.log('this is the req.body.user.id', req.user._id);
   console.log('this is the req.params.id', req.params.id);
  var userId = req.params.id;
  var newrole1 = req.body.role;
  console.log('this is the userId', userId);
  console.log('this is the newrole1', newrole1);
  // console.log('this is the req.body', req.body);
  // var newPass = String(req.body.newPassword);

  return User.findById(userId).exec()
    .then(user => {
      if (newrole1) {
        console.log('inside changeRole function before posting', newrole1);
        user.role = newrole1;
        return user.save()
          .then(() => {
            console.log('Success, after posting', newrole1);
            res.status(204).end();
          })
          .catch(err => next(err));
      } else {
        return res.status(403).end();
      }
    });
}










//*************************************************************************

// export function getcustomData(req, res, next) {
//   var userId = req.user._id;
//   // var oldPass = String(req.body.oldPassword);
//   // var newPass = String(req.body.newPassword);

//   return User.findById(userId).exec()
//     .then(user => {
//       if (user.authenticate(oldPass)) {
//         user.password = newPass;
//         return user.save()
//           .then(() => {
//             res.status(204).end();
//           })
//           .catch(validationError(res));
//       } else {
//         return res.status(403).end();
//       }
//     });
// }



export function showAll(req, res, next) {
  var userId = req.params.id;

  return User.findById(userId).exec()
    .then(user => {
      if (!user) {
        return res.status(404).end();
      }
      res.json(user);
    })
    .catch(err => next(err));
}

//**************************************************************************



/**
 * Get my info
 */
export function me(req, res, next) {
  var userId = req.user._id;

  return User.findOne({ _id: userId }, '-salt -password').exec()
    .then(user => { // don't ever give out the password or salt
      if (!user) {
        return res.status(401).end();
      }
      res.json(user);
    })
    .catch(err => next(err));
}

/**
 * Authentication callback
 */
export function authCallback(req, res, next) {
  res.redirect('/');
}
