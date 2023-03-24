import React, { Component } from 'react';
import { format, add, startOfMonth } from 'date-fns';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: new Date()
        }
    }
    
    btnHandler = (options) => {
        const {day} = this.state;
        const newDate = add(day, options);
        this.setState({date:newDate});
    }

    render() {
        const {day} = this.state;
        return (
            <div>
                <p>{format(startOfMonth(day), "month start at:' cccc")}</p> 
                <p>{format(day, "dd MMMM yy'year, 'cccc")}</p>
                <button onClick={() => {this.btnHandler({days:1})}}>Add 1 day</button>
                <button onClick={() => {this.btnHandler({weeks:1})}}>Add 1 week</button>
                <button onClick={() => {this.btnHandler({months:1})}}>Add 1 month</button>
            </div>
        );
    }
}

export default Calendar;
