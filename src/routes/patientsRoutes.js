import { Router } from "express";
import schemas from "../schemas/index.js";
import patientsController from "../controllers/patientsController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddelware.js";

const patientRoutes = Router();

patientRoutes.post("patients/signup", validateSchema(schemas.patient), patientsController.createPatient());
patientRoutes.post("patients/signin", validateSchema(schemas.patient), patientsController.siginPatient());

export default patientRoutes;
