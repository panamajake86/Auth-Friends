import React from "react";
import { axiosWithAuth } from "../Authorization/axiosWithAuth";
import AddFriend from './AddFriend';

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log("in getData", res.data);
                this.setState(this.state.friends = res.data)
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className='Friends'>
                <h1>My Friends</h1>
                {this.state.friends.map((e) => {
                    return(
                    <>
                        <p>{e.name}</p>
                        <p>{e.age}</p>
                        <p>{e.email}</p>
                        <br></br>
                    </>
                    )
                })}
                <AddFriend />>
            </div>
        )
    }
}

export default Friends