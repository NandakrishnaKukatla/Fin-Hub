import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const transformUser = (doc, ret) => {
  delete ret.password;
  delete ret.__v;
  return ret;
};

userSchema.set('toJSON', { transform: transformUser });
userSchema.set('toObject', { transform: transformUser });

const User = mongoose.model('User', userSchema);

export default User;
