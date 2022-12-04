var mongoose = require("mongoose")
var Schema = mongoose.Schema

var patientSchema = new Schema({
    First_Name: String, 
	Last_Name: String, 
	Address: String,
    Gender: String,
    Mobile: String,
    Email: String,
    create_at: { type: Date, require: true, default: Date.now },
})

module.exports = mongoose.model('Patient', patientSchema)