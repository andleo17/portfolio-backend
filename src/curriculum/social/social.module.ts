import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/sqlite/prisma.module';
import { SocialResolver } from './social.resolver';
import { SocialService } from './social.service';

@Module({
  imports: [PrismaModule],
  providers: [SocialResolver, SocialService],
  exports: [SocialService],
})
export class SocialModule {}
