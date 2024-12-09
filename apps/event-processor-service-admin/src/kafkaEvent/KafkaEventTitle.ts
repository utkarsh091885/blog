import { KafkaEvent as TKafkaEvent } from "../api/kafkaEvent/KafkaEvent";

export const KAFKAEVENT_TITLE_FIELD = "eventType";

export const KafkaEventTitle = (record: TKafkaEvent): string => {
  return record.eventType?.toString() || String(record.id);
};
