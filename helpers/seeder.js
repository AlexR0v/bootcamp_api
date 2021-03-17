const dotenv = require('dotenv')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const Bootcamp = require('../models/Bootcamp')


dotenv.config({ path: './config/config.env' })

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

const bootcamps = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../_data/bootcamps.json'), 'utf-8'))

const importData = async () => {
  try {
    await Bootcamp.create(bootcamps)
    console.log('Data Imported!')
    process.exit()
  } catch (e) {
    console.log(e)
  }
}

const deleteData = async () => {
  try {
    await Bootcamp.deleteMany()
    console.log('Data Destroyed!')
    process.exit()
  } catch (e) {
    console.log(e)
  }
}

if (process.argv[ 2 ] === '-i') {
  importData()
} else if (process.argv[ 2 ] === '-d') {
  deleteData()
}
