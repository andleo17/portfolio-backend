import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/sqlite/prisma.module';
import { InformationResolver } from './information.resolver';
import { InformationService } from './information.service';

@Module({
  imports: [PrismaModule],
  providers: [InformationResolver, InformationService],
  exports: [InformationService],
})
export class InformationModule {}
