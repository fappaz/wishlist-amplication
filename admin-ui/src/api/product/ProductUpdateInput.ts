import { WishListWhereUniqueInput } from "../wishList/WishListWhereUniqueInput";

export type ProductUpdateInput = {
  list?: WishListWhereUniqueInput;
  name?: string | null;
  url?: string | null;
};
