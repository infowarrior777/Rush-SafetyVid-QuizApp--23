'use strict';

import mongoose from 'mongoose';

var ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});


// yeoman Angular Fullstack v3.8.0  by defualt was 
// applying HOOKS to the socket.io thing schema after 
// the thing model is created, so
// i added hooks before model created below 4-29-17

require('./thing.events').applyHooks(ThingSchema);

export default mongoose.model('Thing', ThingSchema);
