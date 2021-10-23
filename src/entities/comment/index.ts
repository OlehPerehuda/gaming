import { Like } from "../like";

export class Comment {
    constructor(
        public id: string,
        public description: string,
        public creatorID: string,
        public likes: Like[],
        public comments: Comment[],
        public createdDate: string,
    ) { };
};
