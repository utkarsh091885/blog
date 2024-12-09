import { KafkaEventWhereUniqueInput } from "./KafkaEventWhereUniqueInput";
import { KafkaEventUpdateInput } from "./KafkaEventUpdateInput";

export type UpdateKafkaEventArgs = {
  where: KafkaEventWhereUniqueInput;
  data: KafkaEventUpdateInput;
};
