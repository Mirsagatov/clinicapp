const { fetch, fetchAll } = require('../../lib/postgres')

const DOCTORS = `
            SELECT
                *
            FROM
                doctors
`

const CLINIC_DOCTORS = `
            SELECT 
                d.doctor_id,
                d.doctor_name,
                cd.doctor_id,
                cd.clinic_id
            FROM
                doctors d
            LEFT JOIN
                clinic_doctors cd
            ON
                d.doctor_id = cd.doctor_id
            WHERE
                cd.clinic_id = $1
`

const NEW_DOCTOR = `
            INSERT INTO 
                doctors(doctor_name)
            VALUES($1) 
            RETURNING doctor_id
`

const NEW_DOCTOR_CLINIC = `
            INSERT INTO 
                clinic_doctors(doctor_id, clinic_id)
            VALUES($1, $2) 
            RETURNING *
`

const doctors = () => fetchAll(DOCTORS)
const clinicDoctors = (clinicID) => fetchAll(CLINIC_DOCTORS, clinicID)
const newDoctor = (doctorName) => fetch(NEW_DOCTOR, doctorName)
const newClinicDoctor = (clinicID, doctorID) => fetch(NEW_DOCTOR_CLINIC, clinicID, doctorID)

module.exports = {
    doctors,
    clinicDoctors,
    newDoctor,
    newClinicDoctor
}