import { ProductUpdateManyWithoutWishListsInput } from "./ProductUpdateManyWithoutWishListsInput";
import { UserUpdateManyWithoutWishListsInput } from "./UserUpdateManyWithoutWishListsInput";

export type WishListUpdateInput = {
  name?: string;
  products?: ProductUpdateManyWithoutWishListsInput;
  user?: UserUpdateManyWithoutWishListsInput;
};
