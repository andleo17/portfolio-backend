import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { InstitutionModel } from 'curriculum/institution/institution.model';

@ObjectType('Information')
export class InformationModel {
  @Field(() => ID)
  id: string;

  @Field()
  categoryId: string;

  @Field({ nullable: true })
  city?: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  endDate?: Date;

  @Field(() => InstitutionModel, { nullable: true })
  institution?: string;

  @Field({ nullable: true })
  institutionId?: string;

  @Field(() => Int, { nullable: true })
  level?: number;

  @Field({ nullable: true })
  startDate?: Date;

  @Field()
  state: boolean;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field({ nullable: true })
  url?: string;
}

@InputType()
export class CreateInformationInput {
  @Field()
  categoryId: string;

  @Field({ nullable: true })
  city?: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  institutionId?: string;

  @Field(() => Int, { nullable: true })
  level?: number;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  state: boolean;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field({ nullable: true })
  url?: string;
}

@InputType()
export class UpdateInformationInput {
  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  institutionId?: string;

  @Field(() => Int, { nullable: true })
  level?: number;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  state?: boolean;

  @Field({ nullable: true })
  url?: string;
}
