import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'username already exists pls choose another one'],
    trim: true,
    minlength: [3, 'Username must be at least 3 characters long'],
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address',
    ],
  },

  lastCoordinate: {
    type: {
      latitude: {
        type: Number,
        required: [true, 'Latitude is required for lastCoordinate'],
      },
      longitude: {
        type: Number,
        required: [true, 'Longitude is required for lastCoordinate'],
      },
    },
    default: null,
  },


  password: {
    type: String,
    // required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
  },

  profileImage: {
    type: String,
    default: 'https://example.com/default-profile.png',
  },

  bio: {
    type: String,
    maxlength: [160, 'Bio must be at most 160 characters long'],
  },

  role: {
    type: String,
    enum: ['User', 'Admin', 'Moderator'],
    default: 'User',
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  
  lastLogin: {
    type: Date,
    default: null,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});



export default model('User', UserSchema);
