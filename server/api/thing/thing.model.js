'use strict';

import mongoose from 'mongoose';

var ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});


// yeoman Angular Fullstack v3.8.0  was not updating 
//things instantly when you create or delete things.
// You have to refresh the page to see the update.  
// github issue #2491 was resolved by finding that the generator is setting it up to apply HOOKS to the socket.io thing schema after 
// the thing model is created, so
// the issue is resolved by adding hooks before the model is created 

// below im importing the applyhooks function and applying hooks before model is created 4-29-17

require('./thing.events').applyHooks(ThingSchema);

export default mongoose.model('Thing', ThingSchema);
