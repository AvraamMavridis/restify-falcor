import RecipeModel from '../models/RecipeModel';

const handler = async function ( fn ) {
    try {
        const data = await fn;
        return data;
    }
    catch ( error )
    {
        //handle errror
        return error;
    }
};

export const create = async newRecipe => handler( RecipeModel.create( newRecipe ) )

export const find = async query => handler( RecipeModel.find( query ) )
