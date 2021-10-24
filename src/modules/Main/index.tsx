import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../app/components/Card';
import { loadGames } from '../../app/store/actions/games';
import { IGame } from '../../entities/game';
import './index.scss';

const Main = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(3);

    const gamesList = useSelector((state: any) => state.games.data);
    const [search, setSearch] = useState('');
    const [searchField, setSearchField] = useState('name');

    const handleChangeString = (handler: (v: string) => void) => (e: any) => {
        handler(e.target.value);
    };

    const handleChangeNumber = (handler: (v: number) => void) => (e: any) => {
        handler(e.target.value);
    };

    useEffect(() => {
        dispatch(loadGames({ page, perPage: perPage, search, searchField }));
    }, [page, perPage]);

    const handleSearch = () => {
        dispatch(loadGames({ page, perPage: perPage, search, searchField }));
    };
    console.log(gamesList);
    return (
        <section className='games'>
            <input value={search} onChange={handleChangeString(setSearch)} />
            <select
                value={searchField}
                onChange={handleChangeString(setSearchField)}
            >
                <option value='name'>Name</option>
                <option value='description'>Description</option>
            </select>
            <div onClick={handleSearch}>Search</div>
            <div className='games__cards-area'>
                {gamesList.map((item: IGame, index: any) => (
                    <Card key={index} card={item} />
                ))}
            </div>
            <select value={perPage} onChange={handleChangeNumber(setPerPage)}>
                <option value={1}>1</option>
                <option value={3}>3</option>
            </select>
        </section>
    );
};

export default Main;
