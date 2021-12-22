const { Router } = require('express')

const authController = require('../authcontroller/auth')

const Clinics = require('./clinics/clinics')
const Doctors = require('./doctors/doctors')
const Queues = require('./queues/queues')

const router = new Router()


const userAuth = require('../middlewares/checkTokenUser')


router
     
     .post('/register', authController.REGISTER)
     .post('/login', authController.LOGIN)



    .get('/clinics', Clinics.CLINICS)
    .get('/clinic/:clinicRefID', Clinics.CLINIC_SERVICES)
    .get('/clinic', Clinics.SERVICES)
    // .get('/clinics/:doctors', Clinics.DOCTORS)
    .post('/newClinic', Clinics.NEW_CLINIC)

    .get('/doctors', Doctors.DOCTORS)
    .get('/doctors/:clinicID', Doctors.CLINIC_DOCTORS)
    .post('/newDoctor', Doctors.NEW_DOCTOR)

     .get('/queues', userAuth.CHECK_TOKEN, Queues.QUEUES)
     .get('/queues/:clinicID', userAuth.CHECK_TOKEN, Queues.QUEUES_BY_CLINIC)
     .post('/newqueue', userAuth.CHECK_TOKEN, Queues.NEW_QUEUE)

module.exports = router;