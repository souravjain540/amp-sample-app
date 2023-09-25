import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NoOfItemModuleBase } from "./base/noOfItem.module.base";
import { NoOfItemService } from "./noOfItem.service";
import { NoOfItemController } from "./noOfItem.controller";

@Module({
  imports: [NoOfItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [NoOfItemController],
  providers: [NoOfItemService],
  exports: [NoOfItemService],
})
export class NoOfItemModule {}
