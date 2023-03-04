import {connect} from 'mongoose'
export async function connectDB(){
    const db = await connect("mongodb://0.0.0.0:27017/motorcicle")
    console.log('database is connected to', db.connection.db.databaseName)
}