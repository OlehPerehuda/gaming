import { Comment } from '../comment';
import { IGame } from '../game';
import { Like } from '../like';

export class UserMainInfo {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public image: string
    ) {}
}

/** exposes User domain entity */
export class User {
    constructor(
        public mainInfo: UserMainInfo,
        public id: string,
        public likes: Like,
        public comments: Comment[],
        public favourites: IGame[]
    ) {}
}
