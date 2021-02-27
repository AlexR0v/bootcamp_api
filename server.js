const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })
const app = express()

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bookamps'})
})

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Get bookamp id:${req.params.id}`})
})

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create bookamp'})
})

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Update bookamp id:${req.params.id}`})
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete bookamp id:${req.params.id}`})
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
