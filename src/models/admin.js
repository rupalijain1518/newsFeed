let mongoose = require('mongoose')
const adminSchema = mongoose.Schema({

userName :{
    type : String,
    required : true,
},

password :{

    type : String,
    required : true,
}

})

adminSchema.statics.findByCredentials= async (userName , password) =>{
    // find user
    const user = await Admin.findOne({userName})

    if(!user)
    throw new Error("Invalid Username")
// then match pw
    const pass = await Admin.findOne({password})
    
    if(!pass)
    throw new Error("Invalid password")
    
    return user
}


const Admin = mongoose.model('admin',adminSchema)


module.exports = Admin