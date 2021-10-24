import React, { FC } from 'react';
import game from '../../static/images/main/game.png';
import commentImg from '../../static/images/main/comment.png';
import './index.scss';

export const CardDetails: FC = () => {
    return (
        <section className="details__description description">
            <img src={game} alt="" className="description__img" />
            <div className="description__inner">
                <div className="description__desc-inner">
                    <h3 className="description__name">WoT</h3>
                    <div className="description__desc">
                        World of Tanks is a video game, a client-side massive multiplayer
                        real-time online game in the genre of an arcade tank simulator
                        in the historic setting of World War II, developed by the
                        Belarusian studio Wargaming.net. The developers position the
                        game as an MMO-action game with elements of role-playing game,
                        shooter and strategy.
                    </div>
                </div>
                <div className="description__box-comments">
                    <div className="description__rate">Rate: 5 / 10</div>
                    <div className="description__comments">
                        <img src={commentImg} alt="" />
                        Comments: 100
                    </div>
                </div>
            </div>
        </section>
    );
};
