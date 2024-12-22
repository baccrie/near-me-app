import mongoose  from "mongoose";

export default function connectDB(URL: string){
  return mongoose.connect(URL)
}