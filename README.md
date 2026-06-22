# API de Tareas

API REST desarrollada con Node.js y Express para la gestión de tareas. Permite listar, consultar y crear tareas mediante endpoints HTTP.

## Descripción del Proyecto

Este proyecto implementa una API RESTful que expone endpoints para el manejo de tareas. Los datos se almacenan en memoria durante la ejecución del servidor. Fue desarrollado como trabajo práctico para aprender el diseño de APIs con Express.

## Tecnologías Utilizadas

- **Node.js** — Entorno de ejecución
- **Express 5** — Framework web

## Estructura del Proyecto

```
api-tareas/
├── app.js                    # Punto de entrada, configuración del servidor
├── routes/
│   └── tarea.js              # Definición de rutas
├── controllers/
│   └── tareaController.js    # Lógica de negocio
├── package.json
└── README.md
```

## Requisitos Previos

- Node.js v18 o superior
- npm

## Instalación y Ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/maximaizrw/api-tareas.git
cd api-tareas
```

2. Instalar las dependencias:

```bash
npm install
```

3. Iniciar el servidor:

```bash
node app.js
```

El servidor quedará escuchando en `http://localhost:3000`.

## Endpoints

### Listar todas las tareas

```
GET /tareas
```

**Ejemplo:**

```bash
curl http://localhost:3000/tareas
```

**Respuesta exitosa (200):**

```json
[
  { "id": 1, "titulo": "Estudiar Express" },
  { "id": 2, "titulo": "Hacer TP" },
  { "id": 3, "titulo": "Subir proyecto a GitHub" }
]
```

---

### Obtener tarea por ID

```
GET /api/tareas/:id
```

**Ejemplo:**

```bash
curl http://localhost:3000/api/tareas/1
```

**Respuesta exitosa (200):**

```json
{
  "id": 1,
  "titulo": "Estudiar Express"
}
```

**Respuesta si no existe (404):**

```json
{
  "mensaje": "Tarea no encontrada"
}
```

---

### Crear tarea

```
POST /tareas
```

**Body (JSON):**

```json
{
  "titulo": "Nueva tarea"
}
```

**Ejemplo:**

```bash
curl -X POST http://localhost:3000/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Nueva tarea"}'
```

**Respuesta exitosa (201):**

```json
{
  "mensaje": "Tarea creada correctamente",
  "tarea": {
    "id": 4,
    "titulo": "Nueva tarea"
  }
}
```

## Listado de Ítems de Configuración Identificados

| Ítem | Valor actual | Ubicación | Descripción |
|------|-------------|-----------|-------------|
| `PORT` | `3000` | [app.js:8](app.js) | Puerto en el que escucha el servidor HTTP |
| Prefijo de ruta `/api` | `/api` | [app.js:6](app.js) | Base de la ruta para obtener tareas por ID |
| Prefijo de ruta `/tareas` | `/tareas` | [app.js:13](app.js) | Base de la ruta para listar y crear tareas |
| Middleware de parseo | `express.json()` | [app.js:5](app.js) | Habilita la lectura de cuerpos JSON en los requests |
| Datos iniciales en memoria | 3 tareas precargadas | [controllers/tareaController.js:1-5](controllers/tareaController.js) | Tareas de ejemplo disponibles al iniciar el servidor |


## Notas de Desarrollo

### Corrección de `module.exports` durante merge del PR `feature-crear-tarea`

Al abrir el Pull Request de la rama `feature-crear-tarea` sin haber fusionado previamente `feature-detalle-tarea` (que ya estaba en `main`), se produjo un conflicto en [controllers/tareaController.js]

**Problema:** el bloque `module.exports` quedó mal indentado, anidado dentro del cierre de la función `crearTarea`, y además solo exportaba esa función:

```

**Corrección aplicada en el merge:** se movió `module.exports` al nivel de módulo y se agregó `obtenerTareaPorId` (que provenía de la otra rama):


```

Esto fue necesario porque al no hacer el merge antes de abrir el PR, las dos ramas divergieron y al integrarlas el archivo quedó con la estructura incorrecta.

---

## Autores

- **Maximiliano Maiz**
- **Lucas Moraga**
- **Gonzalo Sampini**
