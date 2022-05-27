import { StringFilter } from "../../util/StringFilter";
import { WishListWhereUniqueInput } from "../wishList/WishListWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  list?: WishListWhereUniqueInput;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
};
