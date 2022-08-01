import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { KnowledgeModel } from 'curriculum/knowledge/knowledge.model';

@ObjectType('Project')
export class ProjectModel {
  @Field(() => ID)
  id: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => [KnowledgeModel])
  knowledges?: KnowledgeModel[];

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  order: number;

  @Field()
  state: boolean;

  @Field({ nullable: true })
  url?: string;
}

@InputType()
export class CreateProjectInput {
  @Field()
  description: string;

  @Field({ nullable: true })
  image: string;

  @Field(() => [ID])
  knowledges: string[];

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  order: number;

  @Field({ nullable: true })
  state: boolean;

  @Field({ nullable: true })
  url: string;
}

@InputType()
export class UpdateProjectInput {
  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  image: string;

  @Field(() => [ID], { nullable: true })
  knowledges: string[];

  @Field({ nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  order: number;

  @Field({ nullable: true })
  state: boolean;

  @Field({ nullable: true })
  url: string;
}
