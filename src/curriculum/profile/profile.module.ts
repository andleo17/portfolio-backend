import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/sqlite/prisma.module';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';
import { InfoCategoryModule } from '../info-category/info-category.module';
import { SocialModule } from '../social/social.module';
import { ProjectModule } from 'curriculum/project/project.module';

@Module({
  imports: [PrismaModule, InfoCategoryModule, SocialModule, ProjectModule],
  providers: [ProfileResolver, ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
