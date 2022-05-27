import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { WishListTitle } from "../wishList/WishListTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="wishlist.id" reference="WishList" label="List">
          <SelectInput optionText={WishListTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
