// /src/models/Role.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IRole extends Document {
  name: string;
  description: string;
  permissions: string[];
}

const roleSchema: Schema<IRole> = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  permissions: {
    type: [String],
    required: true,
  },
});

const Role: Model<IRole> = mongoose.models.Role || mongoose.model<IRole>('Role', roleSchema);

export default Role;
