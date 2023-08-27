import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChefService } from "./chef.service";
import { ChefControllerBase } from "./base/chef.controller.base";

@swagger.ApiTags("chefs")
@common.Controller("chefs")
export class ChefController extends ChefControllerBase {
  constructor(
    protected readonly service: ChefService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
