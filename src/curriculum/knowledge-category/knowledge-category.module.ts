import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/sqlite/prisma.module';
import { KnowledgeCategoryResolver } from './knowledge-category.resolver';
import { KnowledgeCategoryService } from './knowledge-category.service';

@Module({
  imports: [PrismaModule],
  providers: [KnowledgeCategoryResolver, KnowledgeCategoryService],
  exports: [KnowledgeCategoryService],
})
export class KnowledgeCategoryModule {}
