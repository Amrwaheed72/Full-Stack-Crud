import express from 'express'
import cors from 'cors'
import { clientRouter } from './routes/clientRoute.js'
const app = express()
const port = 3000;

app.use(cors())
app.use(express.json())

app.use('/api', clientRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

