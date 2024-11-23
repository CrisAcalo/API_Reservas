const reservaServices = require("../services/reserva.services");

class ReservaController {
    async getAll(req, res) {
        const reservas = await reservaServices.getAll();
        res.json(reservas);
    }

    async getById(req, res) {
        const id = req.params.id;
        const reserva = await reservaServices.getById(id);
        if (!reserva) {
            res.status(404).json({ message: 'Reserva not found' });
            return null;
        }
        res.json(reserva);
    }

    async create(req, res) {
        const reserva = req.body;
        const id = await reservaServices.create(reserva);
        res.json({ id });
    }

    async update(req, res) {
        const id = req.params.id;

        const reserva = await reservaServices.getById(id);
        if (!reserva) {
            res.status(404).json({ message: 'Reserva not found' });
            return;
        }
        const newData = req.body;
        const result = await reservaServices.update(id, newData);
        res.json(result);
    }

    async delete(req, res) {
        const id = req.params.id;
        const result = await reservaServices.delete(id);
        res.json(result);
    }
}

module.exports = new ReservaController();