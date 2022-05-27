import { ProductCreateNestedManyWithoutWishListsInput } from "./ProductCreateNestedManyWithoutWishListsInput";
import { UserCreateNestedManyWithoutWishListsInput } from "./UserCreateNestedManyWithoutWishListsInput";

export type WishListCreateInput = {
  name: string;
  products?: ProductCreateNestedManyWithoutWishListsInput;
  user?: UserCreateNestedManyWithoutWishListsInput;
};
