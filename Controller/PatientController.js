var mongoose = require("mongoose")
require('../Model/Patient')
var PatientModel = mongoose.model('Patient')
var PatientTestModel = mongoose.model('PatientTest')


//Add Patient
exports.addPatient = function (req, callback) {

    var objPatient = new PatientModel()
    objPatient.First_Name = req.body.First_Name
    objPatient.Last_Name = req.body.Last_Name
    objPatient.Gender = req.body.Gender
    objPatient.Address = req.body.Address
    objPatient.Mobile = req.body.Mobile
    objPatient.Email = req.body.Email

    objPatient.save ( function (err, returnPatient ) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Patient: returnPatient })

    })
}

//Update Patient
exports.updatePatient = function (req, callback) {

    PatientModel.findById(req.params.id, function(err, findPatient) {

        findPatient.Address = req.body.Address
        findPatient.Mobile = req.body.Mobile
        findPatient.Email = req.body.Email


        findPatient.save ( function (err, update ) {

            if (err) callback({ state: { code: 2, text: err.message }})
            callback({ state: { Code: 1, text: 'Successful Process' }, Patient: update })
    
        })

    })

}

//Remove Patient
exports.deletePatient = function (req, callback) {

    PatientModel.findById(req.params.id, function(err, findPatient) {

        findPatient.remove ( function (err) {

            if (err) callback({ state: { code: 2, text: err.message }})
            callback({ state: { Code: 1, text: 'Successful Process' }})
    
        })

    })

}

//Find Patient
exports.findbyIdPatient = function (req, callback) {

    PatientModel.findById(req.params.id, function(err, findPatient) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Patient: findPatient })

    })

}

//List Patient
exports.findAllPatient = function (req, callback) {

    PatientModel.find( {}, function(err, findPatient) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Patient: findPatient })

    })

}


//Add Patient Test
exports.addPatientTest = function (req, callback) {

    var objPatientTest = new PatientTestModel()
    objPatientTest.Full_Name = req.body.Full_Name
    objPatientTest.BloodPressure = req.body.BloodPressure
    objPatientTest.RespiratoryRate = req.body.RespiratoryRate
    objPatientTest.BloodOxygenLevel = req.body.BloodOxygenLevel
    objPatientTest.HeartBeatRate = req.body.HeartBeatRate

    objPatientTest.save ( function (err, returnPatientTest ) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Patient: returnPatientTest })

    })
}

//Find Patient Test
exports.findbyIdPatientTest = function (req, callback) {

    PatientTestModel.findById(req.params.id, function(err, findPatientTest) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Patient: findPatientTest })

    })

}