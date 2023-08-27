/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Chef } from "@prisma/client";

export class ChefServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ChefCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChefCountArgs>
  ): Promise<number> {
    return this.prisma.chef.count(args);
  }

  async findMany<T extends Prisma.ChefFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChefFindManyArgs>
  ): Promise<Chef[]> {
    return this.prisma.chef.findMany(args);
  }
  async findOne<T extends Prisma.ChefFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChefFindUniqueArgs>
  ): Promise<Chef | null> {
    return this.prisma.chef.findUnique(args);
  }
  async create<T extends Prisma.ChefCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChefCreateArgs>
  ): Promise<Chef> {
    return this.prisma.chef.create<T>(args);
  }
  async update<T extends Prisma.ChefUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChefUpdateArgs>
  ): Promise<Chef> {
    return this.prisma.chef.update<T>(args);
  }
  async delete<T extends Prisma.ChefDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChefDeleteArgs>
  ): Promise<Chef> {
    return this.prisma.chef.delete(args);
  }
}
