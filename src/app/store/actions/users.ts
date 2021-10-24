import { Dispatch } from "redux";
import { IUser } from "../../../entities/user";

export const DELETE_USER = "DELETE_USER";

export const deleteUser = (user: IUser) => ({
  type: DELETE_USER,
  email: user.email,
});

export const deleteUserThunk = (id: string) =>
  async function (dispatch: Dispatch) {
    return await {};
  };
