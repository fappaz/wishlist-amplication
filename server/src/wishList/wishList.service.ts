import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { WishListServiceBase } from "./base/wishList.service.base";

@Injectable()
export class WishListService extends WishListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
