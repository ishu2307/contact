var mongoose=require('mongoose')
var Details = mongoose.model('Manager',{
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:Number
    }
})
module.exports={ Details };