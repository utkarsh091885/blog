import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KafkaEventServiceBase } from "./base/kafkaEvent.service.base";

@Injectable()
export class KafkaEventService extends KafkaEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
