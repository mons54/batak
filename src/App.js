import React, { Component } from 'react';
import Card from './component/Card';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="board">
                <Card symbol="heart" number="10" />
                <Card symbol="diamond" number="13" />
            </div>
        );
    }
}