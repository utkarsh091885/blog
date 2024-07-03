import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  author?: string | null;
  authorRelation?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  postContent?: string | null;
  postPublishedDate?: Date | null;
  postTitle?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  userRelation?: string | null;
};
