import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  organiser: string; 
  attendees?: mongoose.Schema.Types.ObjectId[];
  imageUrl?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema: Schema<IEvent> = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  organiser: {
    type: String,
    required: true,
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  imageUrl: {
    type: String,
    default: '',
  },
  tags: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

eventSchema.pre<IEvent>('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const Event: Model<IEvent> = mongoose.models.Event || mongoose.model<IEvent>('Event', eventSchema);

export default Event;
