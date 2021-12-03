const express  = require('express')
const expressLayout = require('express-ejs-layouts')
const router = require('./routers/index')
const app = express()

app.use(express.static('public'))
app.set('view engine','ejs')
app.use(expressLayout)

// app.use(express.urlencoded({extended:false}))
// app.use(express.json)

app.set('layout','layouts/default')


const setDefault = (req,res,next) => {
    res.locals.contentName = "Default"
    next()
}

app.use(router)


app.listen(5555,()=>{
    console.log('server load port 5555')
})