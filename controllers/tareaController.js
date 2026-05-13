const tareas = [
  { id: 1, titulo: "Estudiar Express" },
  { id: 2, titulo: "Hacer TP" },
  { id: 3, titulo: "Subir proyecto a GitHub" }
];

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

    module.exports = {
    crearTarea
};