import { Schema, model, Types } from "mongoose";

const ReviewSchema = new Schema({
  reviewer: {
    type: Types.ObjectId,
    ref: 'User',
    required: [true, 'please provide reviewer']
  },

  locale: {
    type: Types.ObjectId,
    ref: 'Locale',
    required: [true, 'please provide Locale']
  },

  description: {
    type: String,
    required: true,
    trim: true
  },

  rating: {
    type: Number,
    enum: {
      values: [1, 2, 3, 4, 5],
      message: "{VALUE} is not a valid rating. Please use values between 1 and 5."
    },
    required: true,
  }
}, {timestamps: true})

ReviewSchema.index({locale: 1, reviewer: 1}, {unique: true
})

export default model("Review", ReviewSchema)