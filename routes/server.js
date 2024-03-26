//import required modules
const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')

mongoose.connect('iot-link',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//making the server
const server = express()
server.use(bodyParser.json())

//defining schema iot schema
const iotDataSchema = new mongoose.Schema(
    {
        sensorId: String,
        value: Number,
        timestamp: {type: Date, default: Date.now}
    }
    ,{timestamps: true}
)


//create a model on the schema
const IoTData = mongoose.model('IoTData', iotDataSchema)

//recieve data from iot device

server.post('/sendData',
    async(req,res)=>{
        try{
            const {sensorId, value} = req.body
            const newData = new IoTData({sensorId, value})
            await newData.save()
            res.status(201).json({message:"Data received and stored successfully"})
        } catch(error){
            res.status(500).json({error: 'Internal server error'})
        }
    }

)

const port = process.env.PORT || 3000













server.listen(port,()=>{
    console.log('app is running');
})