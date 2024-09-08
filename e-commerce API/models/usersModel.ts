import { Schema, model } from 'mongoose';
import { Users } from '../interfaces/users';
import bcrypt from 'bcryptjs';

const usersSchema: Schema = new Schema<Users>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['manager', 'admin', 'user'], default: 'user' },
  image: String,
  active: { type: Boolean, default: true },
  phone: { type: String },
  resetCode: String,
  passwordChangedAt: Date,
  resetCodeExpireTime: Date,
  resetCodeVerify: Boolean
}, { timestamps: true })

// const imageUrl = (document: Users) => {
//   if (document.image) {
//     document.image = `${process.env.BASE_URL}/users/${document.image}`
//   }
// }

// usersSchema.post<Products>('init', (document: Products) => { imageUrl(document) });
// usersSchema.post<Products>('save', (document: Products) => { imageUrl(document) });

usersSchema.pre<Users>('save', async function (next) {
  if (!this.isModified('password')) next();
  this.password = await bcrypt.hash(this.password, 13);
  next();
})

export default model<Users>('users', usersSchema)
