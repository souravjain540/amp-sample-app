/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NoOfItemWhereUniqueInput } from "./NoOfItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NoOfItemUpdateInput } from "./NoOfItemUpdateInput";

@ArgsType()
class UpdateNoOfItemArgs {
  @ApiProperty({
    required: true,
    type: () => NoOfItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NoOfItemWhereUniqueInput)
  @Field(() => NoOfItemWhereUniqueInput, { nullable: false })
  where!: NoOfItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NoOfItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => NoOfItemUpdateInput)
  @Field(() => NoOfItemUpdateInput, { nullable: false })
  data!: NoOfItemUpdateInput;
}

export { UpdateNoOfItemArgs as UpdateNoOfItemArgs };