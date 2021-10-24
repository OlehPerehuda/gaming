import { IComment } from "../comment";
import { IGame } from "../game";
import { Like } from "../like";

/** main info class */
export class UserMainInfo {
    /** class implementation */
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public image: string
    ) { }
}

/** exposes User domain entity */
export class User {
    /** class implementation */
    constructor(
        public mainInfo: UserMainInfo,
        public id: string,
        public likes: Like,
        public comments: IComment[],
        public favourites: IGame[]
    ) { }
}

/** domain user */
export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    image: string;
    id: string,
}
