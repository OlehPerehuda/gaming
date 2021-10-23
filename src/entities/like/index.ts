import { User } from "../user";

/** exposes Like domain entity */
export class Like {
    constructor(
        public count: string,
        public createdBy: User[]
    ) { };
};
