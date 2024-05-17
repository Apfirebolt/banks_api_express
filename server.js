import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
// swagger docs
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { notFound, errorHandler } from './middleware/Error.js'
import connectDB from './config/db.js'

import userRoutes from './routes/UserRoutes.js'
import bankRoutes from './routes/BankRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

const corsOptions = {
  origin: 'http://localhost:4000', // Cors for svelte app running on port 4000
  credentials: true, // Allow cookies for cross-origin requests (if needed)
  optionSuccessStatus: 200, // Optional: Set the HTTP status code for preflight requests
};

app.use(express.json())
app.use(cors(corsOptions)); 

// Swagger docs
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Bank API',
      description: 'Bank API Information',
      contact: {
        name: 'Amazing Developer',
      },
      servers: ['http://localhost:5000'],
    },
  },
  apis: ['./routes/*.js'],
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

app.use('/api/users', userRoutes)
app.use('/api/banks', bankRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

 // Apply CORS middleware to all routes

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')))

  app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend/build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.sendFile('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
