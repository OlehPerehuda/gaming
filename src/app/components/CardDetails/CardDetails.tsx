import { FC } from 'react';
import commentImg from '../../static/images/main/comment.png';
import { IGame } from '../../../entities/game';

import './index.scss';

export const CardDetails: FC<{ gameDetails: IGame }> = ({ gameDetails }) => {
    return (
        <section className='details__description description'>
            <img
                src={gameDetails.picture}
                alt='game image'
                className='description__img'
            />
            <div className='description__inner'>
                <div className='description__desc-inner'>
                    <h3 className='description__name'>{gameDetails.name}</h3>
                    <div className='description__desc'>
                        {gameDetails.description}
                    </div>
                </div>

                <div className='description__box-comments'>
                    <div>
                        Price: {gameDetails.price} {gameDetails.currency}
                    </div>
                    <div className='description__rate'>
                        Rate: {gameDetails.rated} / 10
                    </div>
                    <div className='description__comments'>
                        <img src={commentImg} alt='' />
                        Comments: {gameDetails.comments?.length}
                    </div>
                </div>
            </div>
        </section>
    );
};
