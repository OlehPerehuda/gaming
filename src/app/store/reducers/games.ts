import { DELETE_GAME, LOAD_GAMES, LOAD_SELECTED_GAME } from "../actions/games";

interface IGame {}

const initState = {
  data: [],
  selectedGame: {},
  loading: true,
};

export const gamesReducer = (
  state: { games: IGame[] | IGame },
  action: any
) => {
  switch (action.type) {
    case LOAD_GAMES:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case LOAD_SELECTED_GAME:
      return {
        ...state,
        selectedGame: action.payload,
      };
    default: {
      return { ...initState, ...state };
    }
  }
};
