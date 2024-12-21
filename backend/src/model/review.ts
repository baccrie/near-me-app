import { Schema, model, Types } from "mongoose";

const ReviewSchema = new Schema({
  reviewer: {
    type: Types.ObjectId,
    ref: 'User'
  },

  locale: {
    type: Types.ObjectId,
    ref: 'Locale'
  },

  description: {
    type: String,
    required: true,
    trim: true
  },

  rating: {
    type: Number,
    enum: [1,2,3,4,5],
    required: true,
  }
})