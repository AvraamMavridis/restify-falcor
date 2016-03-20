/**
 * GraphQL Recipe Schema
 *
 *  @author  Avraam Mavridis    <avr.mav@gmail.com>
 *
 */


import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';

import CustomGraphQLDateType from 'graphql-custom-datetype';
import { find }              from '../models/RecipeModel';

const RecipeType = new GraphQLObjectType( {
    name        : 'Recipe',
    description : 'Single recipe schema',
    fields      : () => ( {
        title : {
            type        : new GraphQLNonNull ( GraphQLString ),
            description : 'The title of the recipe',
        },
        author : {
            type        : new GraphQLNonNull ( GraphQLString ),
            description : 'The author of the recipe',
        },
        description : {
            type        : new GraphQLNonNull ( GraphQLString ),
            description : 'Process of cooking it',
        },
        foodtype : {
            type        : new GraphQLNonNull ( GraphQLString ),
            description : 'Food category, e.g. vegan, vegeterian etc',
        },
        date : {
            type        : CustomGraphQLDateType,
            description : 'Date when the animation were created'
        }
    } ),
} );


const baseType = new GraphQLObjectType( {
    name   : 'Root',
    fields : () => ( {
        recipes : {
            type : new GraphQLList( RecipeType ),
            args : {
                title : {
                    description : 'If omitted replies with all the recipes, if provided it returns the recipe with this title',
                    type        : GraphQLString
                }
            },
            resolve : title => title ? find( { title } ) : find( {} )
        },
    } )
} );

export const GraphQLAnimationSchema = new GraphQLSchema( {
    query : baseType
} );
