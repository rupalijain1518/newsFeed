let mongoose = require('mongoose')

const feedSchema = mongoose.Schema({

feedUrl :{
    type : String,
    required : true
}

})

const Feed = mongoose.model('feed',feedSchema)


module.exports = Feed