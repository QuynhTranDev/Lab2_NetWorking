const express = require('express')
const mongoose = require('mongoose')
const sinhvien = require('../Testing_API/sinhVienModal')

const app = express()

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/API_Test',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Connecting successful!")
}).catch((err)=>{
    console.log("Failed!",err)
})

app.get('/sinhvien', async (req, res) => {
    try {
        const sinhViens = await sinhvien.find()
        // res.json(sinhViens)
        res.render('students',{sinhViens: sinhViens})
        console.log(sinhViens)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internel Server Error'})
    }
})

const PORT = process.env.PORT||3000

app.listen(PORT, () => {
    console.log('Server Successful! in port 3000');
})