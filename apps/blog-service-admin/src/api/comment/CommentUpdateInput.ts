import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  commentAuthor?: string | null;
  commentContent?: string | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  postRef?: string | null;
};
