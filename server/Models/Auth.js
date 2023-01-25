import mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    fullname: {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
    },
    dob: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    fulladdress: {
      country: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String },
      zip: { type: String, required: true },
    },
    about: {},
    image: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
