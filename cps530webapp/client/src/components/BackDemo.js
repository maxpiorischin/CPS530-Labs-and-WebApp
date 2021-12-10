import React, { Component } from 'react';
import axios from "axios";

export default class BackDemo extends Component {
    constructor() {
        super()
        this.state = { counter : 0, date : ""};
    }

    componentDidMount() {
        axios.get('https://cps530server.herokuapp.com/db/show').then(response => {
            console.log(response.data)
            this.setState({counter : response.data.visit_counter, date : response.data.last_date})
        });
        axios.get('https://cps530server.herokuapp.com/db/update')
    }
    render() {
        return (
            <div> 
                <h2 style={{ color: '#FFFFFF'}}> Last visit date by anyone: </h2> <h2 style={{ color: '#6200EE'}}> {this.state.date}</h2>
                <h2 style={{ color: '#FFFFFF'}}> Total amount of times visited:</h2> <h2 style={{ color: '#6200EE'}}> {this.state.counter}</h2>
            </div>
        )
    }
}