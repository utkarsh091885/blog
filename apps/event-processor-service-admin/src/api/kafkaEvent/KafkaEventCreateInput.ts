import { InputJsonValue } from "../../types";

export type KafkaEventCreateInput = {
  eventType?: string | null;
  payload?: InputJsonValue;
  receivedAt?: Date | null;
};
