import React, { Component } from 'react';
import Card from './component/Card';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="board">
                <div className="board-middle">
                    <div className="board-inner">
                        <Card symbol="heart" number="10" />
                        <Card symbol="diamond" number="13" />
                    </div>
                </div>
            </div>
        );
    }
}