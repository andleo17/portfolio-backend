import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/sqlite/prisma.module';
import { ProjectResolver } from './project.resolver';
import { ProjectService } from './project.service';

@Module({
  imports: [PrismaModule],
  providers: [ProjectResolver, ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
