import { InputJsonValue } from "../../types";

export type KafkaEventUpdateInput = {
  eventType?: string | null;
  payload?: InputJsonValue;
  receivedAt?: Date | null;
};
