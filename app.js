const express = require('express');
const app = express();

const tareaRoutes = require('./routes/tarea');

app.use(express.json());

app.use('/tareas', tareaRoutes);

module.exports = app;



