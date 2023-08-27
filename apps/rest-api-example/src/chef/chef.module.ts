import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChefModuleBase } from "./base/chef.module.base";
import { ChefService } from "./chef.service";
import { ChefController } from "./chef.controller";

@Module({
  imports: [ChefModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChefController],
  providers: [ChefService],
  exports: [ChefService],
})
export class ChefModule {}
