import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  commentAuthor?: string | null;
  commentContent?: string | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  postRef?: string | null;
};
