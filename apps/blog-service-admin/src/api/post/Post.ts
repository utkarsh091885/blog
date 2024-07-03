import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Post = {
  author: string | null;
  authorRelation: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  postContent: string | null;
  postPublishedDate: Date | null;
  postTitle: string | null;
  publishedDate: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
  userRelation: string | null;
};
