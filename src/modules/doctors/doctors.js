const {doctors, clinicDoctors, newDoctor, newClinicDoctor} = require('./model');

module.exports = {
    DOCTORS: async(req, res) => {
        try{
            const allDoctors = await doctors()
            res
               .json(allDoctors)
        } catch(error) {
            console.log(error.message);
        }
    },
    CLINIC_DOCTORS: async(req, res) => {
        try{
            const { clinicID } = req.params
            const allClinicDoctors = await clinicDoctors(clinicID)
            res
               .json(allClinicDoctors)
        } catch(error) {
            console.log(error.message);
        }
    },
    NEW_DOCTOR: async(req, res) => {
        try{
            const { doctorName, clinicID } = req.body;
            const doctor = await newDoctor(doctorName)
            const clinicDoctor = await newClinicDoctor(doctor.doctor_id, clinicID)
            res
               .json(doctor)
        } catch(error) {
            console.log(error.message);
        }
    }
}