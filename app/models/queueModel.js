import mongoose, { Schema } from 'mongoose';

// create a Event Schema with a title field
const QueueModelSchema = new Schema(
  {
    queue: { type: [Schema.Types.ObjectId] }, // array of objectIds, referring to the event documents
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
  );

  // create model class
const QueueModel = mongoose.model('QueueModel', QueueModelSchema);

export default QueueModel;
