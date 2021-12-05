import mongoose from "mongoose";
import LoroSchema from "../modelos/loroModel.js";

//Crear objeto loro basado en el schema
const loro = mongoose.model('loro', LoroSchema)

//crear accion para registrar nuevo loro:

export const addLoro = (request, response) => {
    //creando nuevo loro:
    let L = new loro(request.body);
    //grabar la nueva persona 
    L.save((error, L) => {
        if (error) {
            response.send(error);
        } else {
            response.json(L);
        }
    });
} 

//acción para obtener el listado de personas
export const getLoro = (request, response) =>{
    loro.find( { }, (error, loro) => {
         if(error){
             response.send(error)
         }else{
             response.json(loro)
         }
    })
}

//accion para obtener una persona por su id
export const getLoroById = (request, response)=>{
    loro.findById(request.params.loroid, (error, loro)=>{
        if(error){
            response.send(error)
        }else{
            response.json(loro)
        }
    })
}

//accion para actualizar persona
export const updateLoro = (request, response)=>{
    loro.findOneAndUpdate({ _id: request.params.loroid },
                        request.body,
                        {
                          new:true  
                        },
                        (error, loro)=>{
                          if(error){
                              response.send(error)
                          }else{
                              response.json(loro)
                          }
                        })
}

//delete
export const deleteLoro = (request, response)=>{
    loro.remove( { _id: request.params.loroid} ,  
                (error, loro)=>{
                    if(error){
                        response.send(error)
                    }else{
                        response.json({mensaje: "borrado exitosamente"})
                    }

                })
}