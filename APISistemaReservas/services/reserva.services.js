const reservaRepository = require("../repositories/reserva.repositoriy");

class ReservaService{
    async getAll(){
        return await reservaRepository.getAll();
    }

    async getById(id){
        return await reservaRepository.getById(id);
    }

    async create(reserva){
        return await reservaRepository.create(reserva);
    }

    async update(id, reserva){
        return await reservaRepository.update(id, reserva);
    }

    async delete(id){
        return await reservaRepository.delete(id);
    }   
}

module.exports = new ReservaService();