import { WishListUpdateManyWithoutUsersInput } from "./WishListUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  lists?: WishListUpdateManyWithoutUsersInput;
  name?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
