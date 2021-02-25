import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    createdAt: 
    {
      type: Date,
      default: Date.now,
    },
    updatedAt: 
    {
      type: Date
    },
    deletedAt: 
    {
      type: Date
    }
  },  
  { 
    collection: 'chat' 
  }
);

export { UserSchema };
