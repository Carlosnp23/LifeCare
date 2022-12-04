var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var mongoose = require("mongoose")
var app = express()

var DEFAULT_PORT = 3000
var DEFAULT_HOST = '127.0.0.1'

var port = process.env.PORT || DEFAULT_PORT
var ipAddress = process.env.IP || DEFAULT_HOST

//Connection data
const user = "centennial"
const pass = "centennial"
const dbName = "lifecare"

//Connection to the mongodb database
var uristring = 
  process.env.MONGODB_URI || 
  `mongodb+srv://${user}:${pass}@cluster0.xni3biz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uristring, function(err, res) {
    if (err) {
        console.log('ERROR: Connecting to Database. ' + err)
    } else {
        // Where we are connected
        console.log(" *** Connected to db: " + uristring)
    }
})

//Configuration
app.use(bodyParser.json())
app.use(methodOverride())

app.get("/ip", (req, res) => {
    console.log(req.ip) 
    var ip = req.ip.split(':');
    var ip_details = req.socket.address();
    // { address: '::ffff:127.0.0.1', family: 'IPv6', port: 3001
    console.log(ip_details);

    //127.0.0.1
    console.log(ip[3]);
    res.json(ip[3]);  
})

//Define the port on which it listens
app.listen(port, function() {
    console.log('El servidor esta escuchando por: ' + port)
})

//Define the routing of requests
var controllerPatient = require('./Controller/PatientController')

var router = express.Router()

router.get('/', function(req, res) {
    res.send("Hola bienvenido a mi servicio web || Hello welcome to my web service")
})

//Add Patient
router.post('/Patient/addPatient', function (req, res) {
  controllerPatient.addPatient(req, function(data) {
        res.send(data)
    })
    console.log(" Patient Added " )
})

//Update Patient
router.put('/Patient/updatePatient/:id', function (req, res) {
  controllerPatient.updatePatient(req, function(data) {
        res.send(data)
    })
    console.log(" Updated Patient " )
})

//Delete Patient
router.delete('/Patient/DeletePatient/:id', function (req, res) {
  controllerPatient.deletePatient(req, function(data) {
        res.send(data)
    })
    console.log(" Patient Removed " )
})

//Find Patient
router.get('/Patient/findbyIdPatient/:id', function (req, res) {
  controllerPatient.findAllPatient(req, function(data) {
        res.send(data)
    })
    console.log(" Patient Found " )
})

//List Patient
router.get('/Patient/findAllPatient', function (req, res) {
  controllerPatient.findAllPatient(req, function(data) {
        res.send(data)
    })
    console.log(" Listed Patients " )
})

app.use(router)