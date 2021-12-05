import mongoose from "mongoose";

//definir el esquema de loro:
const Schema = mongoose.Schema;

const LoroSchema = new Schema({
    raza: {
        type: String,
        required: "Ingrese la raza"
    },    
    tamaño:{
        type: String,
    },
    nombre:{
        type: String,
    },
    edad:{
        type: Number
    },
    fecha_creacion:{
        type: Date,
        default: Date.now
    }
})

export default LoroSchema