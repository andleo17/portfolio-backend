import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/sqlite/prisma.module';
import { InstitutionResolver } from './institution.resolver';
import { InstitutionService } from './institution.service';

@Module({
  imports: [PrismaModule],
  providers: [InstitutionResolver, InstitutionService],
  exports: [InstitutionService],
})
export class InstitutionModule {}
