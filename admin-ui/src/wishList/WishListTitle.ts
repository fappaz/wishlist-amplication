import { WishList as TWishList } from "../api/wishList/WishList";

export const WISHLIST_TITLE_FIELD = "name";

export const WishListTitle = (record: TWishList): string => {
  return record.name || record.id;
};
