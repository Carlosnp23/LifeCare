var mongoose = require("mongoose")
var SchemaTest = mongoose.Schema

var patientTestSchema = new SchemaTest({
    Full_Name: String, 
    BloodPressure: String,
    RespiratoryRate: String,
    BloodOxygenLevel: String,
    HeartBeatRate: String,
    create_at: { type: Date, require: true, default: Date.now },
})

module.exports = mongoose.model('PatientTest', patientTestSchema)