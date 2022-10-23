
const { Router } = require('express');

const {  proyectosGet,
    proyectosPostGuate,
    proyectosPostCostaRica } = require('../controllers/proyectos');

const router = Router();


router.get('/', proyectosGet );

router.post('/guate', proyectosPostGuate );
router.post('/costa-rica', proyectosPostCostaRica );


module.exports = router;