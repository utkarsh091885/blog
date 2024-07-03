import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  author?: string | null;
  authorRelation?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  postContent?: string | null;
  postPublishedDate?: Date | null;
  postTitle?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  userRelation?: string | null;
};
