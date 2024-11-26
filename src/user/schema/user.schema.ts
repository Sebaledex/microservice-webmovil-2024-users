import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    accessToken: { type: String ,default: 0 }, // Campo opcional
    refreshToken: { type: String, default: 0 }, // Campo opcional
    area: { type: String, enum: ['Administracion', 'Transporte', 'Reparto'], required: true },
  },
  { timestamps: true },
);

UserSchema.index({ username: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });
