let express = require("express")
let mongoose = require('./db/mongoose.js')
let adminRouter = require('./router/admin.js')
let feedRouter = require('./router/feed.js')
let app = express()

app.use(express.json())
app.use(adminRouter)
app.use(feedRouter)

let port = process.env.PORT || 3002
app.listen(port,() =>{
    console.log("server has started on .." + port)
})
