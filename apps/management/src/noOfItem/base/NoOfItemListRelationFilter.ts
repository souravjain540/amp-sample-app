/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NoOfItemWhereInput } from "./NoOfItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NoOfItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NoOfItemWhereInput,
  })
  @ValidateNested()
  @Type(() => NoOfItemWhereInput)
  @IsOptional()
  @Field(() => NoOfItemWhereInput, {
    nullable: true,
  })
  every?: NoOfItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => NoOfItemWhereInput,
  })
  @ValidateNested()
  @Type(() => NoOfItemWhereInput)
  @IsOptional()
  @Field(() => NoOfItemWhereInput, {
    nullable: true,
  })
  some?: NoOfItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => NoOfItemWhereInput,
  })
  @ValidateNested()
  @Type(() => NoOfItemWhereInput)
  @IsOptional()
  @Field(() => NoOfItemWhereInput, {
    nullable: true,
  })
  none?: NoOfItemWhereInput;
}
export { NoOfItemListRelationFilter as NoOfItemListRelationFilter };