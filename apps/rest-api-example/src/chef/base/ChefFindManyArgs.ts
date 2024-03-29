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
import { ChefWhereInput } from "./ChefWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ChefOrderByInput } from "./ChefOrderByInput";

@ArgsType()
class ChefFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ChefWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ChefWhereInput, { nullable: true })
  @Type(() => ChefWhereInput)
  where?: ChefWhereInput;

  @ApiProperty({
    required: false,
    type: [ChefOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ChefOrderByInput], { nullable: true })
  @Type(() => ChefOrderByInput)
  orderBy?: Array<ChefOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ChefFindManyArgs as ChefFindManyArgs };
