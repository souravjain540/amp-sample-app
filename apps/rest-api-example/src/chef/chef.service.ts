import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChefServiceBase } from "./base/chef.service.base";

@Injectable()
export class ChefService extends ChefServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
