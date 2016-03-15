import RecipeSchema from '../schemas/RecipeSchema';
import { model } from 'mongoose';

export const RecipeModel = model( RecipeSchema );
