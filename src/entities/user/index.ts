import { Comment } from '../comment';
import { IGame } from '../game';
import { Like } from '../like';

/** exposes User domain entity */
export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public id: string,
        public age: string,
        public likes: Like,
        public comments: Comment[],
        public favourites: IGame[]
    ) {}
}
