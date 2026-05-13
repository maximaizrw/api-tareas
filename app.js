const express = require('express');
const app = express();

const PORT = 3000;


const tarea = require('./routes/tarea');
app.use(express.json());
app.use('/tarea', tarea);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

