const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'bjordwakofcjuivwiq6x-mysql.services.clever-cloud.com',
    user: 'uc5bfyeyed9u8vif',
    password: 'OIHXG3Je6ZdJu7xljts5',
    database: 'bjordwakofcjuivwiq6x'
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a MySQL:', err);
        return;
    }
    console.log('Conexión a MySQL establecida correctamente');
});

// Definir rutas y controladores aquí

app.listen(port, () => {
    console.log(`Servidor API escuchando en el puerto ${port}`);
});

app.get('/user', (req, res) =>
{
    connection.query('SELECT * FROM Usuarios', (error, results, fields)=>{
        if(error)
        {
            console.error('Error al ejecutar la consulta', error);
            res.status(500).json({error: 'error inerno del servidor'});

        }
        res.json(results);
    })

});

app.get('/userById/:id', (req, res)=>{
    const userId = req.params.id;
    connection.query('SELECT NombreUsuario FROM WHERE ID = ?',userId, (error, results, flieds)=>{
        if(error)
        {
            console.error('Error ', error);
            res.status(500).json({erro: 'Error al realizar la consulta'});
            return;
        }

        if(results.length === 0)
        {
            restart.status(400).json({error: 'Usuario no encontrado'});
            return;
        }
        res.json(results[0]);
    });
})
