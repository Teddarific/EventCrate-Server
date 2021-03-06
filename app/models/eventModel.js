import mongoose, { Schema } from 'mongoose';

// create a Event Schema with a title field
const EventModelSchema = new Schema(
  {
    name: { type: String },
    clubName: { type: String },
    description: { type: String },
    location: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    date: { type: String },
    approved: { type: String, default: '0' }, // (0: not reviewed, 1: approved, 2: declined)
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// create model class
const EventModel = mongoose.model('EventModel', EventModelSchema);


export default EventModel;
