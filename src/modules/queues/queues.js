const res = require('express/lib/response')
const {queues, byClinic,clinic, user, newQueue} = require('./model')

module.exports = {
    QUEUES: async(req, res) => {
        try {
            const allQueues = await queues()
            res.json(allQueues)
        } catch(err) {
            console.log(err.message)
        }
    },
    QUEUES_BY_CLINIC: async(req, res) => {
        try {
            const { clinicID } = req.params
            const queuesByClinic = await byClinic(clinicID)
            res.json(queuesByClinic)
        } catch(err) {
            console.log(err.message)
        }
    },
    NEW_QUEUE: async(req, res) => {
        try {
            const {clientNumber, patientID, clinicID, doctorID} = req.body;
            const doctor = await clinic(clinicID, doctorID)
            const userID = await user(patientID)
            const queue = await newQueue(clientNumber, userID.user_id, doctor.clinic_id, doctor.doctor_id)

            res.json(queue)
            
        } catch(err) {
            console.log(err.message);
        }
    }
}