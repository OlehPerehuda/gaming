import React from 'react';
import './index.scss';

export const Card = () => {
    return (
        <div className="card">
            <div
                className="card__image"
            />
            <div className="card__text-area">
                <h4 className="card__title">Game</h4>
                <p className="card__description">
                    game description
                </p>
            </div>
        </div>
    )
}
