/** just for test rigth now */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CardDetails } from '../../app/components/CardDetails/CardDetails';
import { Comments } from '../../app/components/Comments/Comments';
import { RootState } from '../../app/store';
import { loadGameByID } from '../../app/store/actions/games';
import { ERoutes } from '../../routes';
import './index.scss';
const Details: React.FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const { selectedGame } = useSelector((state: RootState) => state.games);
    useState(() => {
        if (!id) {
            location.pathname = ERoutes.home;
            return;
        }
        dispatch(loadGameByID(id));
    });
    return (
        <div className='details'>
            <CardDetails gameDetails={selectedGame} />
            <Comments />
        </div>
    );
};

export default Details;
