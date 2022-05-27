import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { WISHLIST_TITLE_FIELD } from "../wishList/WishListTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="List" source="wishlist.id" reference="WishList">
          <TextField source={WISHLIST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
