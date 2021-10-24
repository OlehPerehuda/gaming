import React, { useEffect, useState } from 'react';
import { FormattedDate } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IComment } from '../../../entities/comment';
import { IGame } from '../../../entities/game';
import { IUser } from '../../../entities/user';
import { RootState } from '../../store';
import { addComment } from '../../store/actions/comments';
import './styles.scss';

export const Comments: React.FC<{ gameDetails: IGame }> = ({ gameDetails }) => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const [description, setDescription] = useState('');
    const user = useSelector((state: RootState) => state.user);
    const { comments }: { comments: IComment<IUser>[] } = useSelector(
        (state: RootState) => state.comments
    );
    const handleSubmitComment = () => {
        dispatch(
            addComment({
                gameId: id,
                prevComments: gameDetails.comments,
                description,
                creatorID: user.id,
                likes: [],
                createdDate: new Date().getDate(),
            })
        );
    };

    const handleChangeDescription = (e: any) => {
        setDescription(e.target.value);
    };
    return (
        <section className='details__comments comments'>
            <div className='comments__list'>
                {comments.map((comment) => (
                    <div className='comments__item'>
                        <p>
                            [{comment.creator?.lastName}{' '}
                            {comment.creator?.firstName}]: {comment.description}
                        </p>
                        <p>
                            Date:{' '}
                            <FormattedDate
                                value={comment.createdDate}
                                dateStyle='long'
                                timeStyle='long'
                            />
                        </p>
                    </div>
                ))}
            </div>
            {user.id ? (
                <>
                    <textarea
                        className='comments__textarea'
                        placeholder='your comment'
                        rows={8}
                        onChange={handleChangeDescription}
                        value={description}
                    />
                    <div
                        onClick={handleSubmitComment}
                        className='comments__add'
                    >
                        Left comment
                    </div>
                </>
            ) : (
                <div className='comments__no-access'>
                    Please login to let a comment
                </div>
            )}
        </section>
    );
};
