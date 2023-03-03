import express from 'express' 
import {connect} from 'mongoose'
import Motorcicle from "./models/motorcicles";
async function connectDB(){
    const db = await connect("mongodb://0.0.0.0:27017/motorcicle")
    console.log('database is connected to', db.connection.db.databaseName)
}

connectDB()   
const newMotorcicle = new Motorcicle({
    country: "EEUU",
    engine: "1500",
    year: "2020",
    brand: "Bmw"
})
console.log(newMotorcicle);

async function executeQueries(){
    // const newMotorcicle = new Motorcicle({
    //     country: "EEUU",
    //     engine: 1500,
    //     year: 2020,
    //     brand: "Bmw"
    // })
    // console.log(newMotorcicle);

    // await newMotorcicle.save()

    // const stock = await Motorcicle.find({},{country:1, _id:0})
    // console.log(stock)

    const motorcicle = await Motorcicle.findById("640166d8382b0f82ce23f249",{country:1, _id:0})
    console.log(motorcicle)
    // const stock = await Motorcicle.findOne({},{country:1, _id:0})
    // console.log(stock)
    //const motorcicle2 = await Motorcicle.findOneAndUpdate()
    const motorcicle2 = await Motorcicle.findByIdAndUpdate(
        {_id: "640166d8382b0f82ce23f249"}, 
        {country:"Francia", year:2023} ,
        {new: true}
        )
    console.log(motorcicle2)
    
    // const motorcicle3 = await Motorcicle.findOneAndDelete({brand: "bmw"})
    // console.log(motorcicle3) 
    const motorcicle3 = await Motorcicle.findByIdAndDelete("640166d8382b0f82ce23f249")
    console.log(motorcicle3)    
} 

executeQueries()
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('some pinged here' + new Date().toLocaleDateString())
    res.send('INSIDE API ADRESS -> 22')
})
//app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}')
})