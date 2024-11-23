import React from 'react';
import axios from "axios";

const ItemList = (props) => {

    const APIRoute = "http://localhost:3000/api/reservas";

    //funcion para eliminar una reserva en la base de datos con la api
    const handleDelete = (id) => {
        axios.delete(`${APIRoute}/${id}`)
            .then((response) => {
                console.log(response);
                //recargar pagina
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const reserva = props.reserva; // contiene los datos de: id, tipo, nombre_cliente, fecha, hora, detalles
    return (
        <li className="list-group-item">
            <p>{reserva.tipo}</p>
            <p>{reserva.nombre_cliente}</p>
            <p>{reserva.fecha}</p>
            <p>{reserva.hora}</p>
            <p>{reserva.detalles}</p>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">Actualizar</button>
                <button type="button" className="btn btn-danger" onClick={() => { handleDelete(reserva.id) }}>Eliminar</button>
            </div>
        </li>
    );
}

export default ItemList;