import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { InformationModel } from 'curriculum/information/information.model';
import { KnowledgeCategoryModel } from 'curriculum/knowledge-category/knowledge-category.model';
import { ProjectModel } from 'curriculum/project/project.model';

@ObjectType('Knowledge')
export class KnowledgeModel {
  @Field(() => ID)
  informationId: string;

  @Field()
  icon: string;

  @Field(() => InformationModel)
  information?: InformationModel;

  @Field(() => KnowledgeCategoryModel)
  knowledgeCategory?: KnowledgeCategoryModel;

  @Field()
  knowledgeCategoryId: string;

  @Field(() => [ProjectModel])
  projects?: ProjectModel[];
}

@InputType()
export class CreateKnowledgeInput {
  @Field(() => ID)
  informationId: string;

  @Field()
  icon: string;

  @Field()
  knowledgeCategoryId: string;
}

@InputType()
export class UpdateKnowledgeInput {
  @Field({ nullable: true })
  informationId: string;

  @Field({ nullable: true })
  icon?: string;

  @Field({ nullable: true })
  knowledgeCategoryId?: string;
}
