import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { WishListTitle } from "../wishList/WishListTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="wishlist.id" reference="WishList" label="List">
          <SelectInput optionText={WishListTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Edit>
  );
};
