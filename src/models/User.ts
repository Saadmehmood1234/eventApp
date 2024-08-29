import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  fullname: string;
  email: string;
  username: string;
  password: string;
  profilePic: string;
  role: 'admin' | 'faculty' | 'student';
  createdAt: Date;
}

const eventUserSchema: Schema<IUser> = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ['admin', 'faculty', 'student'],
    default: 'student',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const EventUser: Model<IUser> = mongoose.models.EventUser || mongoose.model<IUser>('EventUser', eventUserSchema);

export default EventUser;





// import mongoose, { Document, Model, Schema } from 'mongoose';

// export interface IUser extends Document {
//   fullname: string;
//   email: string;
//   username:string;
//   password: string;
//   profilePic:string;
//   role: 'admin' | 'faculty' | 'student';
//   createdAt: Date;
// }

// const userSchema: Schema<IUser> = new Schema({
//   fullname: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   username:{
//     type:String,
//     required:true,
//     unique:true
//  },
//   password: {
//     type: String,
//     required: true,
//   },
//   profilePic:{
//     type:String,
//     default:"",
//    },
//   role: {
//     type: String,
//     enum: ['admin', 'faculty', 'student'],
//     default: 'student',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

// export default User;