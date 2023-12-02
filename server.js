const express = require("express")
const ejs = require("ejs")
const path = require("path")



const expressEjsLayouts = require("express-ejs-layouts")


const app = express()

const PORT = process.env.PORT || 3000






// set Termplate engine
app.use(expressEjsLayouts)
app.set('views',path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


// assets web pages by get
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/cart',(req,res)=>{
    res.render('customers/cart')
})


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

