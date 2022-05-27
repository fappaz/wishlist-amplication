import { WishListWhereUniqueInput } from "../wishList/WishListWhereUniqueInput";

export type ProductCreateInput = {
  list: WishListWhereUniqueInput;
  name?: string | null;
  url?: string | null;
};
