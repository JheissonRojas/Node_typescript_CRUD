import express from 'express' 
import motorcicleRouter from './routes/motorcicles'

const app = express()
app.use(express.json())

const PORT = 3000

app.use('/motorcicles', motorcicleRouter)

app.listen(PORT, () => {
    console.log('Server running')
})