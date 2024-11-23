import React from 'react';
import axios from "axios";

const Form = () => {

    const APIRoute = "http://localhost:3000/api/reservas";
    const [tipo, setTipo] = React.useState("");
    const [nombre_cliente, setNombreCliente] = React.useState("");
    const [fecha, setFecha] = React.useState("");
    const [hora, setHora] = React.useState("");
    const [detalles, setDetalles] = React.useState("");

    //funcion para crear una nueva reserva en la base de datos con la api
    const handleSubmit = (event) => {
        event.preventDefault();
        const reserva = {
            tipo: tipo,
            nombre_cliente: nombre_cliente,
            fecha: fecha,
            hora: hora,
            detalles: detalles
        };
        axios.post(APIRoute, reserva)
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        //Form para registro de reserva con los campos: tipo, nombre_cliente, fecha, hora, detalles 
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <select className="form-control" id="floating_tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                    <option value="">Seleccione tipo</option>
                    <option value="boleto">boleto</option>
                    <option value="cita">cita</option>
                    <option value="habitacion">habitación</option>
                </select>
                <label htmlFor="floating_tipo">Tipo</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floating_nombre_cliente" placeholder="Nombre del cliente" value={nombre_cliente} onChange={(e) => setNombreCliente(e.target.value)} required />
                <label htmlFor="floating_nombre_cliente">Nombre del cliente</label>
            </div>
            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="floating_fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                <label htmlFor="floating_fecha">Fecha</label>
            </div>
            <div className="form-floating mb-3">
                <input type="time" className="form-control" id="floating_hora" value={hora} onChange={(e) => setHora(e.target.value)} required />
                <label htmlFor="floating_hora">Hora</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" id="floating_detalles" placeholder="Detalles" value={detalles} onChange={(e) => setDetalles(e.target.value)} required></textarea>
                <label htmlFor="floating_detalles">Detalles</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
        </form>
    );
}

export default Form;