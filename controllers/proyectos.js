const { response, request } = require('express');

const Proyecto = require('../models/proyecto');

const proyectosGet = async(req = request, res = response) => {

    const { limite = 10, desde = 0 } = req.query;
   // const query = { pais: "Guatemala" };

    const [ total, proyectos ] = await Promise.all([
        Proyecto.countDocuments(),
        Proyecto.find()
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        proyectos
    });
}

const proyectosPostGuate = async(req, res = response) => {
    
    const { codigo, nombre_proyecto, monto, fecha_inicio } = req.body;
    const proyecto = new Proyecto({ codigo, nombre_proyecto, monto, fecha_inicio });

    // Guardar en BD
    await proyecto.save();

    res.json({
        proyecto
    });
}

const proyectosPostCostaRica = async(req, res = response) => {
    
    const { codigo, nombre_proyecto, pais_ejecuta, fecha_cierre } = req.body;
    const proyecto = new Proyecto({ codigo, nombre_proyecto, pais_ejecuta, fecha_cierre });

    // Guardar en BD
    await proyecto.save();

    res.json({
        proyecto
    });
}

module.exports = {
    proyectosGet,
    proyectosPostGuate,
    proyectosPostCostaRica
}