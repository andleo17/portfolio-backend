import { Module } from '@nestjs/common';
import { InfoCategoryModule } from './info-category/info-category.module';
import { InformationModule } from './information/information.module';
import { InstitutionModule } from './institution/institution.module';
import { ProfileModule } from './profile/profile.module';
import { SocialModule } from './social/social.module';

@Module({
  imports: [
    InformationModule,
    ProfileModule,
    InfoCategoryModule,
    SocialModule,
    InstitutionModule,
  ],
})
export class CurriculumModule {}
