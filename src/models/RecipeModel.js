import RecipeSchema from '../schemas/RecipeSchema';
import { model }    from 'mongoose';

export const RecipeModel = model( 'RecipeModel', RecipeSchema );
export default = RecipeModel;
