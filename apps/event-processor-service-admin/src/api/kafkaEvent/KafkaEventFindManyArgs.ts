import { KafkaEventWhereInput } from "./KafkaEventWhereInput";
import { KafkaEventOrderByInput } from "./KafkaEventOrderByInput";

export type KafkaEventFindManyArgs = {
  where?: KafkaEventWhereInput;
  orderBy?: Array<KafkaEventOrderByInput>;
  skip?: number;
  take?: number;
};
