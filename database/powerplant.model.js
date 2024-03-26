const mongoose = require('mongoose')

const powerPlantSchema = new mongoose.Schema(
    {
        voltage:{
            type: Number,
            required: true
        },

        current:{
            type: Number,
            required: true
        },

        powerKw:{
            type: Number,
            required: true
        },

        powerKVA:{
            type: Number,
            required: true
        },

        frequency:{
            type: Number,
            required: true
        },

        engineRPM:{
            type: Number,
            required: true
        },

        coolantTemp:{
            type: Number,
            required: true
        },

        oilPressure:{
            type: Number,
            required: true
        },

        voltage:{
            type: Number,
            required: true
        },
    }
    
    
    
    ,{timestamps: true})

    module.exports  = {powerPlantSchema}