import { prop, Typegoose  } from "typegoose";
 
class motorcicle extends Typegoose{
  
  @prop({required: true, trim: true, minlength: 3}) // mongoose properties
  country?: string //typescript type
  @prop({min: 1000, max: 8000, required: true}) 
  engine?: number
  @prop({min: 1990, max: 2023, required: true}) 
  year?: number
  @prop({required: true, trim: true, minlength: 3}) 
  brand?: string
  
}

const MotorcicleModel = new motorcicle().getModelForClass(motorcicle)
export default MotorcicleModel
