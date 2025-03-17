const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'usuario', // Cambia con tu usuario de PostgreSQL
  host: 'postgres-db', // Usaremos el nombre del contenedor de PostgreSQL
  database: 'midb', // El nombre de la base de datos
  password: '123456', // Cambia con tu contraseña de PostgreSQL
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`La hora actual es: ${result.rows[0].now}`);
  } catch (err) {
    console.error('Error ejecutando la consulta', err);
    res.status(500).send('Error conectando a PostgreSQL');
  }
});

app.listen(port, () => {
  console.log(`Aplicación corriendo en http://localhost:${port}`);
});
