import { SortOrder } from "../../util/SortOrder";

export type KafkaEventOrderByInput = {
  createdAt?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  receivedAt?: SortOrder;
  updatedAt?: SortOrder;
};
