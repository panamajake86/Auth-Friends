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

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state.friends.length !== prevState.friends.length) {
    //         this.getData();
    //     }
    // };

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
        console.log("inside render", this.state.friends.length);
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
                <AddFriend getData={this.getData} />>
            </div>
        )
    }
}

export default Friends