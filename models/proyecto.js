const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    codigo: {
        type: String
    },
    nombre_proyecto: {
        type: String
    },
    monto: {
        type: String
    },
    pais_ejecuta: {
        type: String
    },
    fecha_inicio: {
        type: String
    },
    fecha_cierre: {
        type: String
    }
});

ProyectoSchema.methods.toJSON = function() {
    const {__v,...proyecto} = this.toObject();
    return proyecto;
}

module.exports = model( 'Proyecto', ProyectoSchema );
