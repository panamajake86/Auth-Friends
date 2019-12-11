import React from "react";
import { axiosWithAuth } from "../Authorization/axiosWithAuth";

function AddFriend ({getData}) {

    const [id, setId] = React.useState();
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState();
    const [email, setEmail] = React.useState('');

    const friendly = {
        id: id,
        name: name,
        age: age,
        email: email
    };

    return (
        <>
            <h1>Add A Friend!!!</h1>
            <input
                onChange={e => setName(e.target.value)}
                value={name}
                placeholder='Name'
            />
            <input
                onChange={e => setAge(e.target.value)}
                value={age}
                placeholder='Age'
            />
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder='Email'
            />
            <button onClick={e => {
                e.preventDefault();
                setId(Date.now());
                axiosWithAuth()
                    .post('/friends', friendly)
                    .then(res => console.log('in button click', res))
                    .catch(err => console.log(err.message));                
                setName('');
                setAge();
                setEmail('');
                getData();
            }}>Add Friend</button>
        </>
    )
}

export default AddFriend;