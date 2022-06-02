/* eslint-disable no-console */
import 'dotenv/config'
import Express from 'express'
import Cors from 'cors'
import Helmet from 'helmet'
import RateLimit from 'express-rate-limit'
import Morgan from 'morgan'
import Mongoose from 'mongoose'
import Todo from './routes/todo'

const app = Express()
const port = process.env.PORT || 3000
const limiter = RateLimit({
  windowMs: 15 * 60 * 100,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
})

app.use(Cors())
app.use(Helmet())
app.use(limiter)
app.use(Morgan('tiny'))
app.use(Express.json())
app.use('/api/v1', Todo)

Mongoose.connect(process.env.MONGO_CONNECTION)
  .then(() => console.log('mongo connected...'))
  .catch(() => "can't connect to mongo")

app.listen(port, () => console.log(`listening to port:${port}`))
