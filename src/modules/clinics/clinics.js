const {clinics, services, clinicServices, newClinic} = require('./model')

module.exports = {
    CLINICS: async(req, res) => {
        try {
            const limit = 2;
            const allClinics = await clinics(+req.query.page, limit)
            res.json(allClinics)
        } catch(err) {
            console.log(err.message)
        }
    },
    SERVICES: async(req, res) => {
        try {
            const allServices = await services()
            res.json(allServices)
        } catch(err) {
            console.log(err.message)
        }
    },   
    CLINIC_SERVICES: async(req,res) => {
        try{
            const { clinicRefID } = req.params
            const clinicAllServices = await clinicServices(clinicRefID)
            res.json(clinicAllServices)
        } catch(err) {
            console.log(err.message);
        }
    } ,
    
    NEW_CLINIC: async(req, res) => {
        try {
            const { clinicName, clinicRefID } = req.body
            const clinic = await newClinic(clinicName, clinicRefID)
            res.json(clinic)
        } catch(err) {
            console.log(err.message)
        }
    }
}