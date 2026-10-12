const { Patient } = require('./models');


// Adding entries/data into database

async function createPatient(a, b, c) {
    try {
        const patient = await Patient.create({
            name: a,
            email: b,
            phone: c
        });

        console.log(patient.toJSON());

    } catch (error) {
        console.error(error);
    }
}


// Retrieve all patients

async function findPatients() {
    try {
        const patients = await Patient.findAll();

        console.log(patients);

    } catch (error) {
        console.error(error);
    }
}

// Find a particular patient using email

async function findPatient() {
    try {
        const patient = await Patient.findOne({
            where: {
                email: 'rahul@example.com'
            }
        });

        console.log(patient);

    } catch (error) {
        console.error(error);
    }
}

// Retrieve patient by Primary Key

async function findByPk() {
    try {
        const patient = await Patient.findByPk(1);

        console.log(patient);

    } catch (error) {
        console.error(error);
    }
}

// Retrieve only selected attributes

async function findByAttribute() {
    try {
        const patients = await Patient.findAll({
            attributes: ['name', 'email']
        });

        console.log(patients);

    } catch (error) {
        console.error(error);
    }
}
// Find patients using Sequelize operator

const { Op } = require('sequelize');

async function findPatientByName() {
    try {
        const patients = await Patient.findAll({
            where: {
                name: {
                    [Op.like]: '%Rahul%'
                }
            }
        });

        console.log(patients);

    } catch (error) {
        console.error(error);
    }
}

// findPatientByName();

// findByAttribute();
// findByPk();
// findPatient();
//findPatients();

// Add patients

//createPatient("Aman", "aman@example.com", "9876543210");
// createPatient("Pinky", "pinky@example.com", "9876543211");