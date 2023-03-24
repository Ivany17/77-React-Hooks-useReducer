import React, { Component } from 'react';

class NameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null,
            isFetching: false
        }
    }
    componentDidMount(){
        this.setState({isFetching:true});
        fetch('/users.json')
            .then((response) => response.json())
            .then((data) => this.setState({users: data}))
            .catch((err) => this.setState({error: err.message}))
            .finally(() => this.setState({isFetching: false}))
    }
    render() {
        const {users} = this.state;
        return (
            <ol>
                {users.map((user) => (<li key={user.id}>{user.name}</li>))}
            </ol>
        );
    }
}

export default NameList;
