const express = require("express");
const router = express.Router();

const notasController = require("../controllers/notasController")

router.get('/', notasController.home)
router.get('/:id/detail', notasController.detail)

router.post('/', notasController.create)
router.put('/:id/detail', notasController.update)
router.delete('/:id/delete', notasController.delete)

module.exports = router;