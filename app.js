const express = require('express');
const app = express();
const tareaRoutes = require('./routes/tarea');

app.use(express.json());
app.use('/api', tareaRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});


