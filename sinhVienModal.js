const mongoose = require('mongoose')
const sinhVienSchema = new mongoose.Schema({
    id:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
})

const sinhvien = mongoose.model('students', sinhVienSchema)
module.exports = sinhvien;