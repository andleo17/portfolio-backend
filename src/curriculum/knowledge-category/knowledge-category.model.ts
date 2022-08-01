import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { KnowledgeModel } from 'curriculum/knowledge/knowledge.model';

@ObjectType('KnowledgeCategory')
export class KnowledgeCategoryModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [KnowledgeModel])
  knowledges?: KnowledgeModel[];
}

@InputType()
export class CreateKnowledgeCategoryInput {
  @Field()
  name: string;
}

@InputType()
export class UpdateKnowledgeCategoryInput {
  @Field({ nullable: true })
  name?: string;
}
