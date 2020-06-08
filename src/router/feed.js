let express = require('express')
let Feed = require('../models/feed.js')


let feedRouter = new express.Router()

feedRouter.post('/feeds',async (req,res) =>{

    const user = new Feed(req.body)
    try{
        const user1 =  await user.save() 
        res.status(200).send({user1})
    
    
}catch(error){
        res.status(400).send(""+error)
    }   
})

feedRouter.get('/feeds', async (req,res) =>{

// schema is assoc with function

try {
    const result = await Feed.find({})
    
    res.status(201).send(result)

}catch(error){
    res.status(400).send(error)
}
})


//search by a specific parameter
feedRouter.get('/feeds/:id',async (req,res) =>{
const _id = req.params.id

try {
    const result =  await Feed.findById({_id})
if(!result)
return res.status(404).send()
res.status(201).send(result)

}catch(error){
    res.status(400).send(error)   
}

})

//tasks delete by id
feedRouter.delete('/feeds/:id', async (req,res) =>{

    try{
        const result = await Feed.findByIdAndDelete(req.params.id)
        console.log(req.params.id)  
if(!result){
    return res.status(404).send()
}    
         res.status(201).send(result)  
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = feedRouter