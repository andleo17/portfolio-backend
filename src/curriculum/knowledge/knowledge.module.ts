import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/sqlite/prisma.module';
import { KnowledgeResolver } from './knowledge.resolver';
import { KnowledgeService } from './knowledge.service';

@Module({
  imports: [PrismaModule],
  providers: [KnowledgeResolver, KnowledgeService],
  exports: [KnowledgeService],
})
export class KnowledgeModule {}
