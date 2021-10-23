import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import game from '../../static/images/main/game.png'

export const Card: React.FC<{card: any}> = (card: any) => {
    const cardData = card.card
    return (
        <div className="card">
            <Link to={`deails/id`}>
                <img
                    className="card__image"
                    alt="game"
                    src={cardData.picture}
                    />
                <div className="card__text-area">
                    <h4 className="card__title">{cardData.name}</h4>
                    <p className="card__description">
                        {cardData.description}
                    </p>
                </div>
                <div className="card__stats">
                    <div className="card__rate">
                        <span className="card__rate__title">Rate: </span>
                        <span className="card__rate__value">{cardData.rated}</span>
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
