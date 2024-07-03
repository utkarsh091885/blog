import { JsonValue } from "type-fest";

export type KafkaEvent = {
  createdAt: Date;
  eventType: string | null;
  id: string;
  payload: JsonValue;
  receivedAt: Date | null;
  updatedAt: Date;
};
