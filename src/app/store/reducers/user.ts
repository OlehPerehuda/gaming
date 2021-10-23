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
                email: action.payload.email,
                password: action.payload.password,
            };
        case LOGIN_USER:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        default: {
            return {...state};
        };
    };
};
