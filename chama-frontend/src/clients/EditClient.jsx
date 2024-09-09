import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditClient() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: 0
    });

    const { firstName, lastName, email, phone } = client;
    
    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadClient();
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/client/${id}`, client);
        navigate("/");
    };

    const loadClient = async () => {
        const response = await axios.get(`http://localhost:8080/client/${id}`);
        setClient(response.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Client</h2>
                    <form onSubmit={(e) => onSubmit(e)} action="">
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter first name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter last name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type={"email"}
                                className="form-control"
                                placeholder="Enter email address"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type={"tel"}
                                className="form-control"
                                placeholder="Enter phone number"
                                name="phone"
                                value={phone}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-primary mx-3">
                                Submit
                            </button>
                            <Link className="btn btn-outline-danger mx-3" to="/">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
