import { Router } from "express";
import * as schemas from "../schemas/index.js";
import * as patientsController from "../controllers/patientsController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddelware.js";

const patientRoutes = Router();

patientRoutes.post("patients/signup", validateSchema(schemas.patient), patientsController.createPatient);
patientRoutes.post("patients/signin", validateSchema(schemas.patient), patientsController.signinPatient);

export default patientRoutes;
