const express = require('express');
const path = require('path');

// Crear un router de Express
const router = express.Router();

// Ruta para la Página 1
router.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'calculadora.html'));
});

// Ruta para la Página 2
router.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'formulario.html'));
});

// Ruta para la Página 3
router.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'menu.html'));
});

// Exportar el router para usarlo en la aplicación principal
module.exports = router;