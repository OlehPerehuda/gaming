import { Link } from 'react-router-dom';
import { IGame } from '../../../entities/game';

import './index.scss';

export const Card: React.FC<{ card: IGame }> = ({ card }) => {
    return (
        <div className='card'>
            <Link to={`details/${card.id}`}>
                <div
                    className='card__image'
                    style={{ backgroundImage: `url("${card.picture}")` }}
                />
                <div className='card__text-area'>
                    <h4 className='card__title'>{card.name}</h4>
                    <p className='card__description'>{card.description}</p>
                </div>
                <div className='card__stats'>
                    <div className='card__rate'>
                        <span className='card__rate__title'>Rate: </span>
                        <span className='card__rate__value'>{card.rated}</span>
                    </div>
                    <div className='card__comments'>
                        <span className='card__comments__title'>
                            Comments:{' '}
                        </span>
                        <span className='card__comments__value'>1000</span>
                    </div>
                </div>
                <p className='card__date'>
                    Created: {new Date(card.createdDate).toLocaleString()}
                </p>
            </Link>
        </div>
    );
};
