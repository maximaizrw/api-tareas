const tareas = [
  { id: 1, titulo: "Estudiar Express" },
  { id: 2, titulo: "Hacer TP" },
  { id: 3, titulo: "Subir proyecto a GitHub" }
];

const obtenerTareas = (req, res) => {
  res.json(tareas);
};

const crearTarea = (req, res) => {

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo: req.body.titulo
  };

  tareas.push(nuevaTarea);

  res.status(201).json({
    mensaje: "Tarea creada correctamente",
    tarea: nuevaTarea
  });
};

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
  crearTarea,
  obtenerTareaPorId,
  obtenerTareas
};