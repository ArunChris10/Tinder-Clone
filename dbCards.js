import mongoose from 'mongoose';

const cardSchema =mongoose.Schema({
    type:String,
    name:String,
    url:String,
})

export default mongoose.model('cards',cardSchema)