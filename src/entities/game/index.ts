import { Comment } from '../comment';
import { Like } from '../like';
import { MarketPlace } from '../../types/marketplace';
import { SocialsMedia } from '../../types/socials';

/** exposes Game domain entity */
export interface IGame {
    name: string;
    hashtages?: string[];
    description: string;
    picture: string;
    status: string;
    socials?: SocialsMedia;
    marketplace: MarketPlace;
    creatorID: string;
    createdDate: string;
    genre: string;
    rated: string;
    price: string;
    currency: string;
    likes: Like[];
    comments: Comment[];
}
