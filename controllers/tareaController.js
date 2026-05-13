const tareas = [
  { id: 1, titulo: "Estudiar Express" },
  { id: 2, titulo: "Hacer TP" },
  { id: 3, titulo: "Subir proyecto a GitHub" }
];

const obtenerTareaPorId = (req, res) => {
  const id = parseInt(req.params.id);

  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({
      mensaje: "Tarea no encontrada"
    });
  }

  res.json(tarea);
};

module.exports = {
  obtenerTareaPorId
};