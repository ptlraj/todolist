const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    status:{
        required:true,
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('Data', dataSchema)