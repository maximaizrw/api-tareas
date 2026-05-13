const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

const {obtenerTareaPorId, obtenerTareas } = tareaController;

router.get('/', obtenerTareas);

router.get('/tareas/:id', obtenerTareaPorId);

router.post('/', tareaController.crearTarea);

module.exports = router;