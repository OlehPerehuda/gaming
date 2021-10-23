import { LOGIN_USER, REGISTER_USER } from "../actions/user";

export class UserState {
    constructor(
        public email: string,
        public password: string,
    ) { };
};

export const userReducer = (state: UserState, action: any) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                email: action.email,
                password: action.password,
            };
        case LOGIN_USER:
            return {
                ...state,
                email: action.email,
                password: action.password,
            };
        default: {
            return {...state};
        };
    };
};
