import { newMotorcicleEntry, MotorcicleEntry, updateMotorcicleEntry } from '../types'
import Motorcicle from "../models/motorcicles";
import * as conection from '../conections/conection'

conection.connectDB()

export const getProducts = async (): Promise<MotorcicleEntry[]> =>{

    const data = await Motorcicle.find({})
    const motorcicles: MotorcicleEntry[] = data as MotorcicleEntry[]
    console.log("PRODUCTS")
    console.log(motorcicles)
    return motorcicles
}

export const getProductById = async (id: string): Promise<MotorcicleEntry> =>{
    
    let response : MotorcicleEntry
    const motorcicleGet = await Motorcicle.findById(id,{_id:0})
    response = motorcicleGet ?? new Motorcicle()
    console.log("PRODUCT")
    console.log(response)
    return response
}

export const deleteProductById = async (id: string): Promise<MotorcicleEntry> =>{
    let response : MotorcicleEntry
    const motorcicleDeleted = await Motorcicle.findByIdAndDelete(id,{_id:0})
    response = motorcicleDeleted ?? new Motorcicle()
    console.log("DELETE PRODUCT")
    console.log(response)
    return response
}


export const addProduct = async (newMotorcicleEntry: newMotorcicleEntry): Promise<newMotorcicleEntry> =>{

    const newMotorcicle = new Motorcicle({
        country: newMotorcicleEntry.country,
        engine: newMotorcicleEntry.engine,
        year: newMotorcicleEntry.year,
        brand: newMotorcicleEntry.brand
    })
    
    const response = await newMotorcicle.save()
    console.log("ADDED PRODUCT");
    console.log(response);
    return newMotorcicleEntry
}

export const updateProduct = async (updateMotorcicleEntry: updateMotorcicleEntry): Promise<updateMotorcicleEntry> =>{
    const newMotorcicle = await Motorcicle.findByIdAndUpdate(
            {_id: updateMotorcicleEntry.id}, 
            {
                country: updateMotorcicleEntry.country,
                engine: updateMotorcicleEntry.engine,
                year: updateMotorcicleEntry.year,
                brand: updateMotorcicleEntry.brand

            } ,
            {new: true}
            )
    
  
    console.log("UPDATED PRODUCT");
    console.log(newMotorcicle);
    return updateMotorcicleEntry
}


