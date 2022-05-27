import { WishListCreateNestedManyWithoutUsersInput } from "./WishListCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  lists?: WishListCreateNestedManyWithoutUsersInput;
  name?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
