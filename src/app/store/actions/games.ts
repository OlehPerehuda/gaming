import { Dispatch } from 'redux';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';
import {
    collection,
    addDoc,
    doc,
    getDoc,
    Firestore,
    getDocs,
    query,
    where,
    FieldPath,
    orderBy,
    startAfter,
    limit,
} from 'firebase/firestore';
import { db, firebaseApp } from '../../../firebase';
import { IGame } from '../../../entities/game';

export const LOAD_GAMES: string = 'LOAD_GAMES';
export const CREATE_GAME: string = 'CREATE_GAME';

export const loadGamesAcation = (games: IGame[]) => ({
    type: LOAD_GAMES,
    payload: games,
});
export const creategameAcation = (game: IGame) => ({
    type: CREATE_GAME,
    payload: game,
});

const auth = getAuth();

/** thunk that implements user login */
export const loadGames = ({
    page,
    perPage,
}: {
    page: number;
    perPage: number;
}) =>
    async function (dispatch: Dispatch) {
        try {
            const querySnapshot = await getDocs(
                query(
                    collection(db, 'game'),
                    orderBy('createdDate'),
                    // // startAfter(lastVisible),
                    limit(perPage)
                )
            );
            if (querySnapshot.empty) {
                dispatch(loadGamesAcation([]));
            } else {
                const data: IGame[] = [];
                querySnapshot.forEach((doc) => {
                    data.push(doc.data() as IGame);
                });
                dispatch(loadGamesAcation(data));
            }
        } catch (error) {
            console.log(error);
        }
    };

/** thunk that implements user login */
export const createGame = (game: IGame) =>
    async function (dispatch: Dispatch) {
        try {
            const querySnapshot = await addDoc(collection(db, 'game'), game);
            console.log(querySnapshot);

            // dispatch(createGame(querySnapshot));
        } catch (error) {
            console.log(error);
        }
    };
