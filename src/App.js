import React, { Component } from 'react';
import Board from './component/Board';
import Card from './component/Card';

export default class App extends Component {
    render() {
        return (
            <Board>
                <Card symbol="heart" number="10" />
                <Card symbol="diamond" number="13" />
            </Board>
        );
    }
}