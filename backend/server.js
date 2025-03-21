const express = require('express');
const cors = require('cors');
const propertyRoutes = require('./routes/properties');
const peopleRoutes = require('./routes/people');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const listingsRoutes = require('./routes/list');
const bookingRoutes = require('./routes/rentals');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/api', peopleRoutes);
app.use('/api', propertyRoutes);

app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api', listingsRoutes);
app.use('/api', bookingRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});