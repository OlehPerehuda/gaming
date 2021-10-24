import { IUser } from "../../../entities/user";
import { DELETE_USER } from "../actions/users";

const initialState = [
    {
        firstName: "Oleg",
        lastName: "T-150",
        email: "oleh@gmail.com",
        password: "123456",
        image: "",
    }
]

export const usersReducer = (state: IUser[] = initialState, action: any) => {
    switch (action.type) {
        case DELETE_USER:
            return state.filter(user => user.email !== action.email)
        default:
            return [...state]
    }
}