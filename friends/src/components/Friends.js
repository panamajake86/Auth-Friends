import React from "react";
import { axiosWithAuth } from "../Authorization/axiosWithAuth";

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
            .get('/data')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className='Friends'>
                {this.state.friends.map((e) => {
                    <>
                        <p>{e.name}</p>
                        <p>{e.age}</p>
                        <p>{e.email}</p>
                    </>
                })}
            </div>
        )
    }
}

export default Friends