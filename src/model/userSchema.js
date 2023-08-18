

import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  name: String,
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  emailVerified: Date,
  image: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
