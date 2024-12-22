import { Schema, model, Types } from "mongoose";

const AmenitySchema = new Schema({
  name: {
    type: String,
    required: [true, 'please provide reviewer'],
    unique: [true, 'No two amenities can have the same name']
  },

  icon : {
    type: String,
    required: [true, 'please provide an icon for the amenity']
  }

 
})


export default model("Amenity", AmenitySchema)