import { CHANGE_LOCAL } from '../actions/local';

const initState = 'en';

export const localReducer = (state: { games: string }, action: any) => {
    switch (action.type) {
        case CHANGE_LOCAL:
            return action.payload;

        default: {
            return initState;
        }
    }
};
