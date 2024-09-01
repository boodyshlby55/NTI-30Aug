import { Schema, model } from 'mongoose';
import { Subcategories } from '../interfaces/subcategories';

const subcategoriesSchema: Schema = new Schema<Subcategories>({
  name: { type: String, required: true, trim: true },
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'categories' }
}, { timestamps: true })