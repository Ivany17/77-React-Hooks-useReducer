import React, { Component } from 'react';

class WindowSizes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: window.innerWidth,
            y: window.innerHeight,
        }
    }

    handlerWindow = (event) => {this.setState({
        x: window.innerWidth,
        y: window.innerHeight,
        })
    }
    
    componentDidMount(){
        window.addEventListener('resize', this.handlerWindow);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handlerWindow);
    }

    render() {
        const {x, y} = this.state
        return (
            <div>
                <p>width: {x}</p>
                <p>height: {y}</p>         
            </div>
        );
    }
}

export default WindowSizes;
