const express = require('express');
const reservasController = require('../controllers/reservas.controller');

const router = express.Router();

router.get('/', (req, res) => {
    reservasController.getAll(req, res);
});
router.get('/:id', (req, res) => {
    reservasController.getById(req, res)
});
router.post('/', (req, res) => {
    reservasController.create(req, res)
});
router.put('/:id', (req, res) => {
    // res.json(req.body);
    reservasController.update(req, res)
});
router.delete('/:id', (req, res) => {
    reservasController.delete(req, res)
});

module.exports = router;









