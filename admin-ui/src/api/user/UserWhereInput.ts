import { StringFilter } from "../../util/StringFilter";
import { WishListListRelationFilter } from "../wishList/WishListListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  lists?: WishListListRelationFilter;
  name?: StringNullableFilter;
  username?: StringFilter;
};
