// id, tipo, nombre_cliente, fecha, hora, detalles, created_at, updated_at
const db = require('../config/db');

class ReservaRepository {
    async getAll() {
        const [rows] = await db.query('SELECT * FROM reservas');
        return rows;
    }

    async getById(id) {
        const [rows] = await db.query('SELECT * FROM reservas WHERE id = ?', [id]);
        return rows;
    }

    async create(reserva) {
        const [result] = await db.query(
            `INSERT INTO reservas (tipo, nombre_cliente, fecha, hora, detalles) VALUES (?, ?, ?, ?, ?)`
            , [reserva.tipo, reserva.nombre_cliente, reserva.fecha, reserva.hora, reserva.detalles]
        );
        return result.insertId;
    }

    async update(id, reserva) {
        const [result] = await db.query('UPDATE reservas SET tipo = ?, nombre_cliente = ?, fecha = ?, hora = ?, detalles = ? WHERE id = ?', [reserva.tipo, reserva.nombre_cliente, reserva.fecha, reserva.hora, reserva.detalles, id]);
        return result.affectedRows;
    }

    async delete(id) {
        const [result] = await db.query('DELETE FROM reservas WHERE id = ?', [id]);
        return result.affectedRows;
    }
}

module.exports = new ReservaRepository();