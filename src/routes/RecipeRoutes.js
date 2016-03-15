import { create, find } from '../models/RecipeModel';


const handleResponse = ( promise, res ) => {
    promise.then( data => res.send( data ) )
           .catch( err => res.send( err ) );
}

export default {
    '/recipe' : {
        post : ( req, res ) => {
            handleResponse( create( req.body ), res );
        },
        get : ( req, res ) => {
            handleResponse( find( {} ), res )
        }
    },
    '/recipe/:name' : {
        get : ( req, res ) => {
            const { name } = req.params;
            handleResponse( find( { name } ), res );
        }
    }
};
