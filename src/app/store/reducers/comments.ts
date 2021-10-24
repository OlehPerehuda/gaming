import { IComment } from "../../../entities/comment";
import { LOAD_COMMENTS } from "../actions/comments";

const initState = {
  comments: [],
};
export const commentsReducer = (
  state: { comments: IComment[] },
  action: any
) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return { comments: action.payload };

    default: {
      return { ...initState, ...state };
    }
  }
};
