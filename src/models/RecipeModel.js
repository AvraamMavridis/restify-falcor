import RecipeSchema from '../schemas/RecipeSchema';
import { model } from 'mongoose';

const RecipeModel = model( 'RecipeModel', RecipeSchema );


export const create = ( newRecipe ) => {
    return new Promise( ( resolve, reject ) => {
        RecipeModel.create( newRecipe, ( err, doc ) => {
            if ( err ) reject( err );
            resolve( doc );
        } )
    } );
}

export const find = function( query )
{
    return new Promise( ( resolve, reject ) => {
        AnimationModel.find( query, ( err, doc ) => {
            if ( !!err ) reject( err );
            resolve( doc );
        } );
    } );
};
