const express = require("express");
const router = express.Router();

const notitasController = require("../controllers/notitasController")

router.get('/', notitasController.home)
router.get('/:id', notitasController.detail)

// router.post('/', indexController.create)
// router.put('/:id/edit', detailController.edit)
// router.delete('/:id/delete', indexController.delete)

module.exports = router;