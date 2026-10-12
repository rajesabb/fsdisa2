const express = require('express');
require('dotenv').config();

const app = express();

// Read JSON data from requests
app.use(express.json());

// Patient routes
const patientRoutes = require('./routes/patientRoutes');

app.use('/api/patients', patientRoutes);

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Pharmacy Medicine Refill Reminder API is running'
  });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});