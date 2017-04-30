/**
 * Thing model events
 */

'use strict';

import {EventEmitter} from 'events';
import Thing from './thing.model';
var ThingEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ThingEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};


function emitEvent(event) {
  return function(doc) {
    ThingEvents.emit(event + ':' + doc._id, doc);
    ThingEvents.emit(event, doc);
  }
}



// added an export function wraping 
//the event emitter register for loop 
//to export applyHooks function which 
//will apply schema hooks before mongoose model is created
// added 4-29-17
export function applyHooks(schema) { 
// Register the event emitter to the model events
  for(var e in events) {
    let event = events[e];
    schema.post(e, emitEvent(event));
  }
}


export default ThingEvents;
