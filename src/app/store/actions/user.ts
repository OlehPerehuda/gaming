import { Dispatch } from 'redux';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

export const REGISTER_USER: string = 'REGISTER_USER';
export const LOGIN_USER: string = 'LOGIN_USER';

export const register = (user: { email: string; password: string }) => ({
    type: 'REGISTER_USER',
    user,
});

export const login = (user: { email: string; password: string }) => ({
    type: 'LOGIN_USER',
    user,
});

const auth = getAuth();
/** thunk that implements user registration */
export const registerUser = (user: { email: string; password: string }) =>
    async function (dispatch: Dispatch) {
        try {
            await createUserWithEmailAndPassword(
                auth,
                user.email,
                user.password
            );
            await addDoc(collection(db, 'user'), {
                firstName: 'oleh',
                lastName: 'oleh',
                age: 12,
            });
            dispatch(register(user));
        } catch (error) {
            console.log(error);
        }
    };
/** thunk that implements user login */
export const loginUser = (user: { email: string; password: string }) =>
    async function (dispatch: Dispatch) {
        try {
            await signInWithEmailAndPassword(auth, user.email, user.password);
            dispatch(login(user));
        } catch (error) {
            console.log(error);
        }
    };
