import React, { Component } from 'react';

class PhoneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: [],
            error: null,
            isFetching: false
        }
    }
    componentDidMount(){
        this.setState({isFetching:true});
        fetch('/phone.json')
            .then((response) => response.json())
            .then((data) => this.setState({phones: data}))
            .catch((err) => this.setState({error: err.message}))
            .finally(() => this.setState({isFetching: false}))
    }
    render() {
        const {phones} = this.state;
        return (
            <ul>
                {phones.map((phone) => (<li key={phone.id}>{phone.name} {phone.price}</li>))}
            </ul>
        );
    }
}

export default PhoneList;
