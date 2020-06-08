let express = require('express')
let Admin = require('../models/admin.js')

let adminRouter = new express.Router()

adminRouter.post('/admin/signup',async (req,res)=>{
    const user = new Admin(req.body)
     try{
         const user1 =  await user.save() 
         res.status(200).send({user1})
     
     
 }catch(error){
         res.status(400).send(error)
     }    
})

adminRouter.post('/admin/login',async (req,res)=>{

    try{
         // supplying email and pw to the function in model and getting result
        const user1 = await Admin.findByCredentials(req.body.userName , req.body.password)
         res.status(200).send({user1})
     
 }catch(error){
         res.status(400).send(""+error)
     }
    })


 module.exports = adminRouter