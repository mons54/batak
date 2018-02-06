import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    render() {
        return (
            <div className={`card card--${ this.props.symbol } card--${ this.props.number }`}>
                <div className="card-before"></div>
                <div className="card-symbol"></div>
                <div className="card-after"></div>
            </div>
        );
  }
}