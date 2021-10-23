import { LOGIN_USER, REGISTER_USER } from "../actions/user";

export interface IUserState {
    email: string,
    firstName: string,
    lastName: string,
}

export const userReducer = (state: IUserState, action: any) => {
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
        default: {
            return {...state};
        };
    };
};
