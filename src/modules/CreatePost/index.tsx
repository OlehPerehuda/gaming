/** just for test rigth now */
import React from 'react';
import { useDispatch } from 'react-redux';
import { createGame } from '../../app/store/actions/games';

const CreatePost: React.FC = () => {
    const dispatch = useDispatch();
    const handleCreate = () => {
        dispatch(createGame({} as any));
    };
    return (
        <div>
            <h1>CreatePost Page</h1>
            <button onClick={handleCreate}>Create post</button>
        </div>
    );
};

export default CreatePost;
