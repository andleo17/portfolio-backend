import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/sqlite/prisma.module';
import { InfoCategoryResolver } from './info-category.resolver';
import { InfoCategoryService } from './info-category.service';
import { InformationModule } from '../information/information.module';

@Module({
  imports: [PrismaModule, InformationModule],
  providers: [InfoCategoryResolver, InfoCategoryService],
  exports: [InfoCategoryService],
})
export class InfoCategoryModule {}
