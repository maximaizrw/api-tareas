const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

// Rutas para tareas

router.post('/', tareaController.crearTarea);

module.exports = router;