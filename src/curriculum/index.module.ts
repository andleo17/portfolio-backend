import { Module } from '@nestjs/common';
import { InfoCategoryModule } from './info-category/info-category.module';
import { InformationModule } from './information/information.module';
import { InstitutionModule } from './institution/institution.module';
import { KnowledgeCategoryModule } from './knowledge-category/knowledge-category.module';
import { KnowledgeModule } from './knowledge/knowledge.module';
import { ProfileModule } from './profile/profile.module';
import { ProjectModule } from './project/project.module';
import { SocialModule } from './social/social.module';

@Module({
  imports: [
    InfoCategoryModule,
    InformationModule,
    InstitutionModule,
    KnowledgeCategoryModule,
    KnowledgeModule,
    ProfileModule,
    ProjectModule,
    SocialModule,
  ],
})
export class CurriculumModule {}
