import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type WishListWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  products?: ProductListRelationFilter;
  user?: UserListRelationFilter;
};
