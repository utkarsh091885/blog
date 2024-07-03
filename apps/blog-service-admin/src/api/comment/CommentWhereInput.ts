import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  commentAuthor?: StringNullableFilter;
  commentContent?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  postRef?: StringNullableFilter;
};
