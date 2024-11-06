//mvc arch --> model view controller(Routers)
let mongoose = require('mongoose')

// create model class
let BookModel = mongoose.Schema({
    Name:String,
    Author:String,
    Published:String,
    Price:Number
},
{
    Collection:"Bio_books"

})

module.exports = mongoose.model('Book',BookModel)



