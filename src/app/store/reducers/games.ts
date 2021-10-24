import { LOAD_GAMES } from '../actions/games';

interface IGame {}

const initState = {
    data: [],
    loading: true,
};

export const gamesReducer = (state: { games: IGame[] }, action: any) => {
    switch (action.type) {
        case LOAD_GAMES:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };

        default: {
            return { ...initState, ...state };
        }
    }
};
