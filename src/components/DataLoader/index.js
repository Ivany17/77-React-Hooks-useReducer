import React, { Component } from 'react';

class DataLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null,
            isFetching: false
        }
    }

    load = () => {
        //const {path, format} = this.props;
        const {loadData} = this.props;
        this.setState({isFetching:true});
        // fetch(path)
            //.then((response) => response[format]())
        loadData()
            .then((data) => this.setState({users: data}))
            .catch((err) => this.setState({error: err.message}))
            .finally(() => this.setState({isFetching: false}))
    }

    componentDidMount(){this.load()}

    render() {
        const {render} = this.props;
        return render(this.state);
    }
}

export default DataLoader;
