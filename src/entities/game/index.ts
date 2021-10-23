import { Comment } from "../comment";
import { Like } from "../like";
import { MarketPlace } from "../../types/marketplace";
import { SocialsMedia } from "../../types/socials";

/** exposes Game domain entity */
export class Game {
    constructor(
        public name: string,
        public hashtages: string[],
        public description: string,
        public picture: string,
        public status: string,
        public socials: SocialsMedia,
        public marketplace: MarketPlace,
        public creatorID: string,
        public createdDate: string,
        public genre: string,
        public rated: string,
        public price: string,
        public currency: string,
        public likes: Like[],
        public comments: Comment[],
    ) { };
};