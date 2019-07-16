const express = require ('express')
const cron = require('node-cron')
const bodyParser = require('body-parser')
const request =  require('request')
const {scheduler} = require('./helpers')
const {sendEmail} = require('./helpers')

const port = process.env.PORT || 8080;
const app = new express();

var counter = 2;                        
const emailList = ['Tim.Andrews@open.ac.uk', 'Vassilis.Angelis@open.ac.uk','James.Barnett@open.ac.uk', 'Sara.Grabauskas@open.ac.uk', 'Tushar.Pai@open.ac.uk',
'Adriano.Perrone@open.ac.uk','Patrick.Sim@open.ac.uk', 'Dale.Singh@open.ac.uk', 'Clem.Whiting@open.ac.uk', 'Richard.Willmoth@open.ac.uk']


cron.schedule(' 0 22 * * 1-5', ()=> {
    scheduler(counter,emailList)
    counter++
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log('the app is listening in port 3000')
})