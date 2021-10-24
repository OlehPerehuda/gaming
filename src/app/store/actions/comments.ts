import {
    addDoc,
    collection,
    doc,
    getDoc,
    setDoc,
    updateDoc,
} from '@firebase/firestore';
import { Dispatch } from 'redux';
import { IComment } from '../../../entities/comment';
import { db } from '../../../firebase';
import { loadGameByID } from './games';

export const LOAD_COMMENTS: string = 'LOAD_COMMENTS';

export const loadCommentsAction = (comments: IComment[]) => ({
    type: LOAD_COMMENTS,
    payload: comments,
});

/** thunk that implements saving commnets */
export const addComment = ({
    gameId,
    prevComments,
    ...comment
}: IComment & { gameId: string; prevComments: number[] }) =>
    async function(dispatch: Dispatch) {
        try {
            const data = await addDoc(collection(db, 'comments'), comment);
            await updateDoc(doc(db, 'game', gameId), {
                comments: [...prevComments, data.id],
            });
            dispatch(loadGameByID(gameId) as any);
        } catch (error) {
            console.log(error);
        }
    };

/** thunk that implements saving commnets */
export const getCommentsByIds = (ids: number[]) =>
    async function(dispatch: Dispatch) {
        try {
            const loaders = ids.map(async(id: number) => {
                const docSnap = await getDoc(doc(db, 'comments', id as any));
                if (!docSnap.data()) {
                    return;
                }
                // @ts-ignore
                const comment: IComment = docSnap.data();
                const userSnap = await getDoc(
                    doc(db, 'user', comment.creatorID)
                );
                return { ...comment, creator: userSnap.data() };
            });
            const comments = await Promise.all(loaders);
            if (!comments) {
                return;
            }
            dispatch(loadCommentsAction(comments as IComment[]));
        } catch (error) {
            console.log(error);
        }
    };
