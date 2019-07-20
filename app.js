const express = require ('express')
const cron = require('node-cron')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const request =  require('request')
const {sendEmail} = require('./helpers/sendEmail')

const port = process.env.PORT || 8080;
const app = new express();

var counter = 4;                        

const emailList = process.env.EMAIL_LIST_2

cron.schedule(' 3 7 * * 1-5', ()=> {
    sendEmail(counter,emailList)
    counter++
},{timezone: "Europe/London"})

app.listen(process.env.PORT || 8080, ()=>{
    console.log('the app is listening in port 3000')
})