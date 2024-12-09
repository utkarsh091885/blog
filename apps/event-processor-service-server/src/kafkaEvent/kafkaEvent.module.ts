import { Module } from "@nestjs/common";
import { KafkaEventModuleBase } from "./base/kafkaEvent.module.base";
import { KafkaEventService } from "./kafkaEvent.service";
import { KafkaEventController } from "./kafkaEvent.controller";
import { KafkaEventResolver } from "./kafkaEvent.resolver";

@Module({
  imports: [KafkaEventModuleBase],
  controllers: [KafkaEventController],
  providers: [KafkaEventService, KafkaEventResolver],
  exports: [KafkaEventService],
})
export class KafkaEventModule {}
