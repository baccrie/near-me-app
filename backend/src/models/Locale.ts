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
    type: [
      {
        day: {
          type: String,
          enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          required: true,
        },
        openTime: {
          type: String, // Use 24-hour format like "08:00"
          required: true,
        },
        closeTime: {
          type: String, // Use 24-hour format like "18:00"
          required: true,
        },
        isOpen: {
          type: Boolean,
          default: true, // Whether the locale is open on that day
        },
      },
    ],
    
    required: true,
    default: [
      { day: 'Monday', openTime: '08:00', closeTime: '18:00' },
      { day: 'Tuesday', openTime: '08:00', closeTime: '18:00' },
      { day: 'Wednesday', openTime: '08:00', closeTime: '18:00' },
      { day: 'Thursday', openTime: '08:00', closeTime: '18:00' },
      { day: 'Friday', openTime: '08:00', closeTime: '18:00' },
      { day: 'Saturday', openTime: '10:00', closeTime: '14:00' },
      { day: 'Sunday', openTime: 'Closed', closeTime: 'Closed', isOpen: false },
    ], 
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

LocaleSchema.virtual("reviews", {
  ref: "Review", 
  localField: "_id", 
  foreignField: "locale",
  justOne: false
});


LocaleSchema.set("toObject", { virtuals: true });
LocaleSchema.set("toJSON", { virtuals: true });



LocaleSchema.pre('remove', async function(next) {
  await this.model('Review').deleteMany({locale: this._id})
})

export default model('Locale', LocaleSchema);