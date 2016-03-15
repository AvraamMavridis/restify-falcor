import { Schema } from 'mongoose';

export default new Schema({
    title :  String,
    author : String,
    description :   String,
    date : { type: Date, default: Date.now },
    foodtype : String
});
