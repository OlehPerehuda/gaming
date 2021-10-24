import { LOGIN_USER, LOGOUT, REGISTER_USER } from '../actions/user';

export interface IUserState {
    email: string;
    firstName: string;
    lastName: string;
}

const initState = {
    email: '',
    firstName: '',
    lastName: '',
};

export const userReducer = (state: IUserState = initState, action: any) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                ...action.payload,
            };
        case LOGIN_USER:
            return {
                ...state,
                ...action.payload,
            };
        case LOGOUT:
            return { ...initState };
        default: {
            return { ...state };
        }
    }
};
