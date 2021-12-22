const { fetch, fetchAll } = require('../../lib/postgres')

const QUEUES = `
    SELECT
        q.queue_id,
        u.user_name,
        q.client_number,
        c.clinic_name,
        d.doctor_name,
        q.query_time, 
        q.isApproved  
    FROM    
        queue q
    INNER JOIN
        users u
    ON
    u.user_id = q.client_id
    INNER JOIN
        clinics c
    ON
        c.clinic_id = q.clinic_id
    INNER JOIN
        doctors d
    ON
        d.doctor_id = q.doctor_id
    ORDER BY 
        q.query_time  
`

const QUEUES_BY_CLINIC = `
    SELECT
        q.queue_id,
        u.user_name,
        q.client_number,
        c.clinic_name,
        d.doctor_name,
        q.query_time, 
        q.isApproved  
    FROM    
        queue q
    INNER JOIN
        users u
    ON
    u.user_id = q.client_id
    INNER JOIN
        clinics c
    ON
        c.clinic_id = q.clinic_id
    INNER JOIN
        doctors d
    ON
        d.doctor_id = q.doctor_id
    ORDER BY 
        q.query_time  

    WHERE 
        c.clinic_id = $1
` 

const SEARCH_CLINIC = `
            SELECT 
                d.doctor_id,
                c.clinic_id
            FROM
                doctors d
            INNER JOIN
                clinic_doctors cd
            ON
                d.doctor_id = cd.doctor_id
            INNER JOIN
                clinics c
            ON
                c.clinic_id = cd.clinic_id
            WHERE
                c.clinic_name = $1 AND d.doctor_name = $2
`

const SEARCH_USER = `
            SELECT 
                user_name
            FROM
                users
            WHERE
                user_id = $1`

const NEW_QUEUE = `
    INSERT INTO
        queues(client_number,
            patient_id,
            clinic_id,
            doctor_id)
    VALUES($1, $2, $3, $4)
`


const queues = () => fetchAll(QUEUES)
const byClinic = (clinicID) => fetchAll(QUEUES_BY_CLINIC, clinicID)

const clinic = (clinicName, doctorName) => fetch(SEARCH_CLINIC, clinicName, doctorName)
const user = (userName) => fetch(SEARCH_USER, userName)
const newQueue = (clientNumber, patientID, clinicID, doctorID) => fetch(NEW_QUEUE, clientNumber, patientID, clinicID, doctorID)
module.exports = {
    queues,
    byClinic,
    clinic,
    user,
    newQueue
}