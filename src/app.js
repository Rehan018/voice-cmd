const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const bodyParser = require('body-parser');

const noteRoutes = require('./routes/noteRoutes');
const speechRoutes = require('./routes/speechRoutes');
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
console.log("swagg",swaggerSpecs);


app.use('/api/notes', noteRoutes);
app.use('/api/speech', speechRoutes);

module.exports = app;
