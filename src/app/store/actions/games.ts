import { Dispatch } from 'redux';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

export const LOAD_GAMES: string = 'LOAD_GAMES';

export const loadGamesAcation = (games: any[]) => ({
    type: LOAD_GAMES,
    games,
});

const auth = getAuth();

/** thunk that implements user login */
export const loadGames = (page: number) =>
    async function (dispatch: Dispatch) {
        try {
            const docRef = doc(db, 'cities', 'SF');
            const docSnap = await getDoc(docRef);
            console.log(docSnap);
            // await signInWithEmailAndPassword(auth, user.email, user.password);
            dispatch(loadGamesAcation([]));
        } catch (error) {
            console.log(error);
        }
    };
