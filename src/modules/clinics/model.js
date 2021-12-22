const { fetch, fetchAll } = require('../../lib/postgres')

const CLINICS = `
    SELECT 
        clinic_id,
        clinic_name
    FROM
        clinics
    WHERE
        clinic_ref_id IS NULL
    ORDER BY clinic_id desc
    OFFSET ($1 - 1) * $2 FETCH NEXT $2 ROWS ONLY
`

const CLINIC_SERVICES = `
    SELECT
        clinic_id,
        clinic_name
    FROM
        clinics
    WHERE
        clinic_ref_id = $1
`
const SERVICES = `
    SELECT 
        clinic_id,
        clinic_name
    FROM
        clinics
    WHERE
        clinic_ref_id IS NOT NULL
`

const NEW_CLINIC = `
    INSERT INTO 
        clinics(clinic_name, clinic_ref_id)
    VALUES($1, $2)
    RETURNING *
`

const clinics = (page, limit) => fetchAll(CLINICS, page, limit)
const services = () => fetchAll(SERVICES)
const clinicServices = (clinicRefID) => fetchAll(CLINIC_SERVICES, clinicRefID)
const newClinic = (clinicName, clinicRefID) => fetch(
    NEW_CLINIC, 
    clinicName,
    clinicRefID ? clinicRefID: null
)

module.exports = {
    clinics,
    services,
    clinicServices,
    newClinic
}