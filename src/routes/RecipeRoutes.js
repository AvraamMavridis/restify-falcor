/**
 * Server Routes
 *
 *  @author  Avraam Mavridis    <avr.mav@gmail.com>
 *
 */

import { graphql }             from 'graphql';
import { RecipeGraphQLSchema } from '../schemas/RecipeGraphQLSchema';

const requestBuilder = query => graphql( RecipeGraphQLSchema, query )

const requestHandler = async function ( fn, res ) {
    try {
        const data = await fn;
        res.send( data );
    }
    catch ( error )
    {
        res.send( error );
    }
};

export default {
    '/data' : {
        post : ( req, res ) => requestHandler( requestBuilder( req.body ), res ),
        get  : ( req, res ) => requestHandler( requestBuilder( req.query.graphql ), res )
    }
};
