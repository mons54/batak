import React, { Component } from 'react';
import './Board.css';

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <div className="board-middle">
                    <div className="board-inner">
                        <div className="player player--left">
                            <span className="player-name">Eslam Elsayed</span>
                            <img className="player-avatar" src="https://graph.facebook.com/1265844633491993/picture" />
                        </div>
                        <div className="player player--top">
                            <img className="player-avatar" src="https://graph.facebook.com/1265844633491993/picture" />
                        </div>
                        <div className="player player--right">
                            <img className="player-avatar" src="https://graph.facebook.com/1265844633491993/picture" />
                        </div>
                        <div className="player player--bottom">
                            <img className="player-avatar" src="https://graph.facebook.com/1265844633491993/picture" />
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}