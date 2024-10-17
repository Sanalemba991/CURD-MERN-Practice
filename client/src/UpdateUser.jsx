import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
                setAge(res.data.age);
            })
            .catch(err => console.error("Error fetching user:", err));
    }, [id]);

    const update = (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            age: age ? Number(age) : null,
        };

        axios
            .put(`http://localhost:3001/updateUser/${id}`, userData)
            .then((result) => {
                console.log(result);
                // Reset form fields after successful submission
                setName("");
                setEmail("");
                setAge("");
                navigate('/');
            })
            .catch((err) => {
                console.error("Error updating user:", err);
            });
    };

    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={update}>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdateUser;
