import { WishList } from "../wishList/WishList";

export type User = {
  createdAt: Date;
  id: string;
  lists?: Array<WishList>;
  name: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
