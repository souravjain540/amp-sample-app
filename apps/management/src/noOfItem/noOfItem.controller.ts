import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NoOfItemService } from "./noOfItem.service";
import { NoOfItemControllerBase } from "./base/noOfItem.controller.base";

@swagger.ApiTags("noOfItems")
@common.Controller("noOfItems")
export class NoOfItemController extends NoOfItemControllerBase {
  constructor(
    protected readonly service: NoOfItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
