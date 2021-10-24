import { User } from '../user';

/** exposes Like domain entity */
export class Like {
    /** class implementation */
    constructor(public count: string, public createdBy: User[]) {}
}
