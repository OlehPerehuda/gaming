import { IUser } from '../../../entities/user';
import { GET_USERS } from '../actions/users';

const initState = {
    data: [],
    loading: true,
};

export const usersReducer = (state: { users: IUser }, action: any) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return {
                ...initState,
                ...state
            };
    }
};
