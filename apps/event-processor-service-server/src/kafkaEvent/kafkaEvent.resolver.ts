import * as graphql from "@nestjs/graphql";
import { KafkaEventResolverBase } from "./base/kafkaEvent.resolver.base";
import { KafkaEvent } from "./base/KafkaEvent";
import { KafkaEventService } from "./kafkaEvent.service";

@graphql.Resolver(() => KafkaEvent)
export class KafkaEventResolver extends KafkaEventResolverBase {
  constructor(protected readonly service: KafkaEventService) {
    super(service);
  }
}
