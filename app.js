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
EMAIL_LIST_1 = ['Tim.Andrews@open.ac.uk', 'Vassilis.Angelis@open.ac.uk','James.Barnett@open.ac.uk', 'Sara.Grabauskas@open.ac.uk', 'Tushar.Pai@open.ac.uk']
EMAIL_LIST_2 = ['Adriano.Perrone@open.ac.uk','Patrick.Sim@open.ac.uk', 'Dale.Singh@open.ac.uk', 'Clem.Whiting@open.ac.uk', 'Richard.Willmoth@open.ac.uk']


const emailList = EMAIL_LIST_2

cron.schedule(' 3 7 * * 1-5', ()=> {
    sendEmail(counter,emailList)
    counter++
},{timezone: "Europe/London"})

app.listen(process.env.PORT || 8080, ()=>{
    console.log('the app is listening in port 3000')
})