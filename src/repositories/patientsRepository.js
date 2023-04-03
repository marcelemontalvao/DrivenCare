import db from "../config/database.js";

async function findPatientByEmail({ email }) {
    await db.query(`
        SELECT 
            *
        FROM 
            patients 
        WHERE 
            email = $1
    `, [ email ]);
};

async function createPatient({ name, email, password }) {
    await db.query(`
        INSERT INTO 
            patients (name, email, password)
        VALUES 
            ($1, $2, $3)
    `, [ name, email, password ]);
}

export { createPatient, findPatientByEmail };