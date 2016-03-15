import mongoose from 'mongoose';

const db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'connection error') );
db.once( 'open', console.log.bind( console, 'connection open') );

const options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  replset: { rs_name: 'myReplicaSetName' }
}

const uri = 'mongodb://localhost:27017/';

export const connect = () => mongoose.connect( uri, options);
