import bcrypt from "bcrypt";
import * as errors from "../errors/index.js";
import * as patientsRepository from "../repositories/patientsRepository.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

async function createNewPatient({ name, email, password }) {
    try {
        const { rowCount } = await patientsRepository.findPatientByEmail(email);

        if (rowCount) throw errors.conflict("Patient already exists");

        const hashPassword = await bcrypt.hash(password, 10);
        const newPatient = await patientsRepository.createPatient({
            name, 
            email, 
            password: hashPassword
        });

        return newPatient;
    } catch (error) {
        console.log(error);
        throw errors.internalServerError();
    };
};

async function signinPatient({ email, password }) {
    const { rows: [patient], } = await patientsRepository.findPatientByEmail(email);
  
    if(!(patient && (await bcrypt.compare(password, patient.password)))) throw errors.incorrectRequestBodyFormatsError();
  
    try {
        const token = jwt.sign({ patientId: patient.id }, process.env.SECRET_KEY);
        return token;
    } catch (error) {
        console.error(error);
        throw errors.internalServerError();
    };
    
};
  
export { createNewPatient, signinPatient };