import React from 'react';
import List from "../../Components/List";
import ItemList from "../../Components/ItemList";
import Form from "../../Components/Form";
import axios from "axios";

const Home = () => {
    const APIRoute = "http://localhost:3000/api/reservas";
    const [reservas, setReservas] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        axios.get(APIRoute)
            .then((response) => {
                setReservas(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    return (
        <div>
            <h1>Reservas</h1>

            <Form />

            <List>
                {reservas.map((reserva) => (
                    <ItemList key={reserva.id} reserva={reserva} />
                ))}
            </List>


        </div>
    );
}

export default Home;