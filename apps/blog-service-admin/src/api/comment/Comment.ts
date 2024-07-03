import { Post } from "../post/Post";

export type Comment = {
  author: string | null;
  commentAuthor: string | null;
  commentContent: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  postRef: string | null;
  updatedAt: Date;
};
