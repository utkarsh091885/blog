import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KafkaEventService } from "./kafkaEvent.service";
import { KafkaEventControllerBase } from "./base/kafkaEvent.controller.base";

@swagger.ApiTags("kafkaEvents")
@common.Controller("kafkaEvents")
export class KafkaEventController extends KafkaEventControllerBase {
  constructor(protected readonly service: KafkaEventService) {
    super(service);
  }
}
