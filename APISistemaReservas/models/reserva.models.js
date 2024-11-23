class Reserva{
    constructor(id, tipo, nombre_cliente, fecha, hora, detalles, created_at){
        this.id = id;
        this.tipo = tipo;
        this.nombre_cliente = nombre_cliente;
        this.fecha = fecha;
        this.hora = hora;
        this.detalles = detalles;
        this.created_at = created_at;
    }
}

module.exports = Reserva;