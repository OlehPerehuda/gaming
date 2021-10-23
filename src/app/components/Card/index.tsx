import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import game from '../../static/images/main/game.png'

export const Card = () => {
    const id = 'cremkc'
    return (
        <div className="card">
            <Link to={`deails/${id}`}>
                <img
                    className="card__image"
                    alt="game"
                    src={game}
                    />
                <div className="card__text-area">
                    <h4 className="card__title">Name</h4>
                    <p className="card__description">
                        game description
                    </p>
                </div>
                <div className="card__stats">
                    <div className="card__likes">
                        <span className="card__likes__title">Likes: </span>
                        <span className="card__likes__value">100</span>
                    </div>
                    <div className="card__comments">
                        <span className="card__comments__title">Comments: </span>
                        <span className="card__comments__value">1000</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
