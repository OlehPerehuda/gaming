import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { IUser } from "../../entities/user";
import { deleteUserThunk } from "../../app/store/actions/users";

import "./index.scss";

export const Users = () => {
  const users: IUser[] = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  return (
    <section className="users">
      <div className="users__wrapper">
        <ul className="users__list">
          {users.map((user: IUser) => (
            <li
              className="users__item"
              key={user.email}
              onClick={() => dispatch(deleteUserThunk(user.email))}
            >
              <span>{user.email}</span>
              <span>delete &#10006;</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Users;
