import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { POST_TITLE_FIELD } from "./PostTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <TextField label="AuthorRelation" source="authorRelation" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="PostContent" source="postContent" />
        <TextField label="PostPublishedDate" source="postPublishedDate" />
        <TextField label="PostTitle" source="postTitle" />
        <TextField label="publishedDate" source="publishedDate" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="UserRelation" source="userRelation" />
        <ReferenceManyField
          reference="Comment"
          target="postId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="author" source="author" />
            <TextField label="commentAuthor" source="commentAuthor" />
            <TextField label="commentContent" source="commentContent" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="postRef" source="postRef" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
