const { response, request } = require('express');

/**
 * Maneja las peticiones GET para obtener dispositivos.
 * Devuelve un listado de dispositivos de prueba.
 * 
 * @param {request} req - Objeto de petición de Express.
 * @param {response} res - Objeto de respuesta de Express.
 */
const dispositivosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - dispositivosGet',
        dispositivos: [
            {
                id: 'D0051',
                nombre: 'Sensor de Temperatura',
                estado: 'activo',
                ubicacion: 'Sala de Estar',
                valor: 24.5
            },
            {
                id: 'D002',
                nombre: 'Cámara de Seguridad',
                estado: 'inactivo',
                ubicacion: 'Entrada Principal',
                valor: null
            },
            {
                id: 'D003',
                nombre: 'Termostato Inteligente',
                estado: 'activo',
                ubicacion: 'Cocina',
                valor: 22.0
            }
        ],
        queryParams: {
            q,
            nombre,
            apikey,
            page, 
            limit
        }
    });
}

/**
 * Maneja las peticiones POST para registrar un nuevo dispositivo.
 * 
 * @param {request} req - Objeto de petición de Express.
 * @param {response} res - Objeto de respuesta de Express.
 */
const dispositivosPost = (req, res = response) => {

    const { nombre, tipo } = req.body;

    res.json({
        msg: 'post API - dispositivosPost',
        nombre, 
        tipo
    });
}

/**
 * Maneja las peticiones PUT para actualizar un dispositivo por su ID.
 * 
 * @param {request} req - Objeto de petición de Express.
 * @param {response} res - Objeto de respuesta de Express.
 */
const dispositivosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - dispositivosPut',
        id
    });
}

/**
 * Maneja las peticiones PATCH para actualizaciones parciales de dispositivos.
 */
const dispositivosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - dispositivosPatch'
    });
}

/**
 * Maneja las peticiones DELETE para eliminar un dispositivo.
 */
const dispositivosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - dispositivosDelete'
    });
}

module.exports = {
    dispositivosGet,
    dispositivosPost,
    dispositivosPut,
    dispositivosPatch,
    dispositivosDelete,
}
