var mongoose = require("mongoose")
var Schema = mongoose.Schema

var patientTestSchema = new Schema({
    Full_Name: String, 
    BloodPressure: String,
    RespiratoryRate: String,
    BloodOxygenLevel: String,
    HeartBeatRate: String,
    create_at: { type: Date, require: true, default: Date.now },
})

module.exports = mongoose.model('PatientTest', patientTestSchema)