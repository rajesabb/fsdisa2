const express = require('express');
const router = express.Router();

const { Patient } = require('../models');

// GET all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.findAll();

    res.json(patients);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching patients',
      error: error.message
    });
  }
});

// GET one patient by ID
// CREATE a new patient
router.post('/', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const patient = await Patient.create({
      name,
      email,
      phone
    });

    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({
      message: 'Error creating patient',
      error: error.message
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);

    if (!patient) {
      return res.status(404).json({
        message: 'Patient not found'
      });
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching patient',
      error: error.message
    });
  }
});

module.exports = router;