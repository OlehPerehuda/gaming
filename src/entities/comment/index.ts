import { Like } from "../like";

export interface IComment<T = {}> {
  description: string;
  creatorID: string;
  likes: Like[];
  createdDate: number;
  creator?: T;
  id?: string;
}
