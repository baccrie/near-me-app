import { Schema, model, Types } from 'mongoose'

const LocaleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name must be provided'], 
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'], 
  },
  coordinates: {
    longitude: {
      type: Number,
      required: [true, 'Longitude is required'], 
    },
    latitude: {
      type: Number,
      required: [true, 'Latitude is required'], 
    },
  },
  reviews: {
    type: [Types.ObjectId],
    ref: 'Review',
  },
  host: {
    name: {
      type: String,
      required: [true, 'Host name is required'], 
    },
    about: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  gallery: {
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    image4: { type: String },
  },
  coverImage: {
    type: String,
  },
  amenities: {
    type: [Types.ObjectId],
    ref: 'Amenity',
  },
  status: {
    type: String,
    enum: ['Open', 'Break', 'Closed'],
    default: 'Open',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('locale', LocaleSchema);

