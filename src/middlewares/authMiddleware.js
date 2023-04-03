import patientsRepository from "../repositories/patientsRepository.js";

async function validate(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).send("Request without token");

  try {
   
    const { patientId } = jwt.verify(token, process.env.SECRET_KEY);
    if (!patientId) return res.status(404).send("Patient not found");

    const { rows: [patient] } = await patientsRepository.getPatientById(patientId);
        
    res.locals.patient = {
        id: patient.id
    };
    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default { validate };