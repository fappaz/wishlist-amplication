import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
