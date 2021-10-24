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
    setDoc,
    query,
    where,
    FieldPath,
    orderBy,
    startAfter,
    limit,
    QueryConstraint,
} from 'firebase/firestore';
import { db, firebaseApp } from '../../../firebase';
import { IGame } from '../../../entities/game';
import { ERoutes } from '../../../routes';

export const LOAD_GAMES: string = 'LOAD_GAMES';
export const LOAD_SELECTED_GAME: string = 'LOAD_SELECTED_GAME';
export const CREATE_GAME: string = 'CREATE_GAME';

export const loadGamesAcation = (games: IGame[]) => ({
    type: LOAD_GAMES,
    payload: games,
});
export const createGameAcation = (game: Omit<IGame, 'id'>) => ({
    type: CREATE_GAME,
    payload: game,
});
export const loadGameAcation = (game: Omit<IGame, 'id'>) => ({
    type: LOAD_SELECTED_GAME,
    payload: game,
});

const auth = getAuth();

/** thunk that implements user login */
export const loadGames = ({
    page,
    perPage,
    search,
    searchField,
}: {
    page: number;
    perPage: number;
    search: string;
    searchField: string;
}) =>
    async function (dispatch: Dispatch) {
        try {
            //@ts-ignore
            const cond: QueryConstraint[] = [
                // orderBy('createdDate'),
                !!search ? where('name', '>=', search) : false,
                !!search ? where('name', '<=', search + '\uf8ff') : false,
                limit(perPage),
            ].filter(Boolean);
            const querySnapshot = await getDocs(
                query(collection(db, 'game'), ...cond)
            );
            if (querySnapshot.empty) {
                dispatch(loadGamesAcation([]));
            } else {
                const data: IGame[] = [];
                querySnapshot.forEach((doc) => {
                    data.push({ ...doc.data(), id: doc.id } as IGame);
                });
                dispatch(loadGamesAcation(data));
            }
        } catch (error) {
            console.log(error);
        }
    };

/** thunk that implements create game */
export const createGame = (game: Omit<IGame, 'id'>) =>
    async function (dispatch: Dispatch) {
        if (!auth.currentUser) {
            return;
        }

        try {
            await setDoc(doc(db, 'game', auth.currentUser.uid), game);
            await dispatch(createGameAcation(game));
            location.pathname = ERoutes.home;
        } catch (error) {
            console.log(error);
        }
    };

/** thunk that implements load game */
export const loadGameByID = (id: string) =>
    async function (dispatch: Dispatch) {
        try {
            const docSnap = await getDoc(
                doc(db, 'game', '2RbMIe4iSpd5YKDq6TYu')
            );
            console.log(docSnap.exists());
            if (docSnap.exists()) {
                dispatch(loadGameAcation(docSnap.data() as IGame));
            } else {
                // doc.data() will be undefined in this case
                console.log('No such document!');
            }
        } catch (error) {
            console.log(error);
        }
    };
