import { useState, useEffect } from 'react';
import http from '../http';
export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect (() => {
        fetchAllUsers();
    },[]);
    const fetchAllUsers = () => {
        http.get("/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }
    return (
        <div className="container">
            <h1>User Listing</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sno.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>           
                    <tbody>
                    {users.map((user, index) => (
                            <tr key={user.id} >
                                <td>{index}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>edit</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}