import httpStatus from "http-status";
import * as patientsService from "../services/patientsService.js";

async function createPatient(req, res, next) {
  const { name, email, password } = req.body;

  try {
    await patientsService.createNewPatient({ name, email, password });
    return res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    next(err);
  };
};

async function signinPatient(req, res) {
  const { email, password } = req.body;

  try {
    const token = await patientsService.signinPatient({ email, password });
    return res.send({ token });
  } catch (err) {
    next(err);
  };
};

export { createPatient, signinPatient };