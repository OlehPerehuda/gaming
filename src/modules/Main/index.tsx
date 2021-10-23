import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../app/components/Card';
import { loadGames } from '../../app/store/actions/games';
import './index.scss';

const Main = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const gamesList = useSelector((state: any) => state.games.data);
    console.log(gamesList)

    useEffect(() => {
        dispatch(loadGames({ page, perPage: 6 }));
    }, [page]);
    return (
        <section className='games'>
            <div className='games__cards-area'>
                {gamesList.map((item: any, index: any) => (
                    <Card key={index} card={item}/>
                ))}
            </div>
        </section>
    );
};

export default Main;
