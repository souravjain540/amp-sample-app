import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NoOfItemServiceBase } from "./base/noOfItem.service.base";

@Injectable()
export class NoOfItemService extends NoOfItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
