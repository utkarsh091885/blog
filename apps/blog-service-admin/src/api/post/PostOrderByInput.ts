import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  author?: SortOrder;
  authorRelation?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postContent?: SortOrder;
  postPublishedDate?: SortOrder;
  postTitle?: SortOrder;
  publishedDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userRelation?: SortOrder;
};
