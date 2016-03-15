import restify from 'restify';
import { routes } from './src/routes';
import { connect } from './src/db';

const server = restify.createServer({
    name : 'avraam'
});


Object.keys( routes ).forEach( route => {
    for( let r in routes[ route ] )
    {
        server[ r ]( route, routes[ route ][ r ] );
    }
} );

server.listen( 8080, connect );
