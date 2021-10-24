import { IUser } from "../../../entities/user";
import { IPayload } from "../../../interfaces/redux";
import { DELETE_USER } from "../actions/users";

const initialState: IUser[] = [
  {
    firstName: "Oleg",
    lastName: "T-150",
    email: "oleh@gmail.com",
    image: "",
    isAdmin: false,
  },
];

export const usersReducer = (
  state: IUser[] = initialState,
  action: IPayload<IUser>
) => {
  switch (action.type) {
    case DELETE_USER:
      return state.filter((user) => user.email !== action.payload.email);
    default:
      return [...state];
  }
};
