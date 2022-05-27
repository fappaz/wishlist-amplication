import { WishList } from "../wishList/WishList";

export type Product = {
  createdAt: Date;
  id: string;
  list?: WishList;
  name: string | null;
  updatedAt: Date;
  url: string | null;
};
