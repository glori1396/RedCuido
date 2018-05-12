const express = require('express')
const fs = require('fs');
const casoEsperaController = require('../controllers/casoEsperaController')
const casoVisitaController = require('../controllers/casoVisitaController')
const casoActivoController = require('../controllers/casoActivoController')
const casoExcluidoController = require('../controllers/casoExcluidoController')
const casoRechazadoController = require('../controllers/casoRechazadoController')
const notificacionController = require('../controllers/notificacionController')
const authController = require('../controllers/authController')
const router = express.Router()

//Funcion general para eliminar archivos del server.
router.put('/eliminar', function(req,res){
    for(var i=0; i < req.body.files.length; i++){
        fs.unlink(`../Servidor/uploads/${req.body.files[i]}`, (err) => {
            if (err){
                console.log(err)
            };
        });
    }  
})

router.get('/espera', casoEsperaController.getCasosEspera)
router.post('/espera/casoEspera', casoEsperaController.createCasoEspera)
router.put('/espera/edit/:id', casoEsperaController.editCasoEspera)
router.post('/espera/accept/:id', casoEsperaController.acceptCasoEspera)
router.post('/espera/reject/:id', casoEsperaController.rejectCasoEspera)
router.get('/espera/download/:id', casoEsperaController.download)
router.post('/espera/delete/:id', casoEsperaController.deleteCasoEspera)

router.get('/visita', casoVisitaController.getCasosVisita)
router.post('/visita/casoVisita', casoVisitaController.createCasoVisita)
router.put('/visita/edit/:id', casoVisitaController.editCasoVisita)
router.post('/visita/accept/:id', casoVisitaController.acceptCasoVisita)
router.post('/visita/reject/:id', casoVisitaController.rejectCasoVisita)
router.get('/visita/download/:id', casoVisitaController.download)
router.post('/visita/delete/:id', casoVisitaController.deleteCasoVisita)

router.get('/activos', casoActivoController.getCasosActivos)
router.put('/activos/edit/:id', casoActivoController.editCasoActivo)
router.post('/activos/casoActivo', casoActivoController.createCasoActivo)
router.post('/activos/exclude/:id', casoActivoController.excludeCasoActivo)
router.get('/activos/download/:id', casoActivoController.download)
router.post('/activos/delete/:id', casoActivoController.deleteCasoActivo)

router.get('/casoExcluido', casoExcluidoController.getCasosExcluidos)
router.post('/casoExcluido', casoExcluidoController.createCasoExcluidos)
router.put('/excluido/edit/:id', casoExcluidoController.editCasoExcluido)
router.post('/excluido/reactivate/:id', casoExcluidoController.reactivateCasoExcluido)
router.get('/excluido/download/:id', casoExcluidoController.download)
router.post('/excluido/delete/:id', casoExcluidoController.deleteCasoExcluido)

router.get('/casoRechazado', casoRechazadoController.getCasosRechazados)
router.post('/casoRechazado', casoRechazadoController.createCasoRechazado)
router.put('/rechazado/edit/:id', casoRechazadoController.editCasoRechazado)
router.post('/rechazado/reactivate/:id', casoRechazadoController.reactivateCasoRechazado)
router.get('/rechazado/download/:id', casoRechazadoController.download)
router.post('/rechazado/delete/:id', casoRechazadoController.deleteCasoRechazado)

router.get('/notificaciones', notificacionController.getNotificaciones)
router.post('/cleanNotificaciones', notificacionController.cleanNotificaciones)
router.post('/deleteNotificacion', notificacionController.deleteNotificacion)

module.exports = router
