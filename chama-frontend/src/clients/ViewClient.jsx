import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewClient() {
    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadClient();
    });

    const loadClient = async () => {
        const response = await axios.get(`http://localhost:8080/client/${id}`);
        setClient(response.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Client details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of client id: {client.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>First Name: </b>
                                    {client.firstName}
                                </li>
                                <li className="list-group-item">
                                    <b>Last Name: </b>
                                    {client.lastName}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {client.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Phone: </b>
                                    {client.phone}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};
