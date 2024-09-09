import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [clients, setClients] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = async () => {
        const response = await axios.get("http://localhost:8080/clients");
        setClients(response.data);
    };

    const deleteClient = async (id) => {
        await axios.delete(`http://localhost:8080/client/${id}`);
        loadClients();
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Client Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map((client, index) => (
                                <tr key={index + 1}>
                                    <th scope="row">
                                        {client.id}
                                    </th>
                                    <td>{client.firstName}</td>
                                    <td>{client.lastName}</td>
                                    <td>{client.email}</td>
                                    <td>{client.phone}</td>
                                    <td>
                                        <Link
                                            className="btn btn-primary mx-2"
                                            to={`/viewclient/${client.id}`}
                                        >
                                            View
                                        </Link>
                                        <Link
                                            className="btn btn-outline-primary mx-2"
                                            to={`/editclient/${client.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deleteClient(client.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
