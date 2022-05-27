import { Module } from "@nestjs/common";
import { WishListModuleBase } from "./base/wishList.module.base";
import { WishListService } from "./wishList.service";
import { WishListController } from "./wishList.controller";
import { WishListResolver } from "./wishList.resolver";

@Module({
  imports: [WishListModuleBase],
  controllers: [WishListController],
  providers: [WishListService, WishListResolver],
  exports: [WishListService],
})
export class WishListModule {}
