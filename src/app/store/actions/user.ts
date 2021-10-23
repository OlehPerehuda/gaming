import { Dispatch } from 'redux';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';
import { collection, addDoc, getDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { UserMainInfo } from '../../../entities/user';

export const REGISTER_USER: string = 'REGISTER_USER';
export const LOGIN_USER: string = 'LOGIN_USER';
export const IS_LOGINED: string = 'IS_LOGINED';

export const register = (user: UserMainInfo) => ({
    type: REGISTER_USER,
    payload: user,
});

export const login = (user: { email: string; password: string }) => ({
    type: LOGIN_USER,
    payload: user,
});

export const isLogined = (isLogined: boolean) => ({
    type: IS_LOGINED,
    payload: isLogined,
});

const auth = getAuth();
/** thunk that implements user registration */
export const registerUser = (user: UserMainInfo) =>
    async function (dispatch: Dispatch) {
        try {
            await createUserWithEmailAndPassword(
                auth,
                user.email,
                user.password
            );

            if (!auth.currentUser) {
                console.log('error');
                return;
            }

            await setDoc(doc(db, 'user', auth.currentUser.uid), {
                email: user.email,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                id: auth.currentUser.uid,
                isAdmin: false,
                comments: [],
                favourites: [],
            });
            dispatch(register(user));
            location.pathname = '/';
        } catch (error) {
            console.log(error);
        }
    };
/** thunk that implements user login */
export const loginUser = (user: { email: string; password: string }) =>
    async function (dispatch: Dispatch) {
        try {
            await signInWithEmailAndPassword(auth, user.email, user.password);
            if (!auth.currentUser) {
                console.log('error');
                return;
            };

            const docSnap = await getDoc(doc(db, 'user', auth.currentUser.uid));
            console.log(docSnap);
            if (docSnap.exists()) {
                console.log('Document data:', docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log('No such document!');
            }
            dispatch(login(user));
            location.pathname = '/';
        } catch (error) {
            console.log(error);
        }
    };
