import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { InformationModel } from '../information/information.model';

@ObjectType('InfoCategory')
export class InfoCategoryModel {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  icon?: string;

  @Field(() => [InformationModel], { nullable: true })
  information?: [InformationModel];

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field(() => Int)
  profileId: number;

  @Field()
  state: boolean;
}

@InputType()
export class CreateInfoCategoryInput {
  @Field({ nullable: true })
  icon?: string;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field({ nullable: true })
  state: boolean;
}

@InputType()
export class UpdateInfoCategoryInput {
  @Field({ nullable: true })
  icon?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field({ nullable: true })
  state?: boolean;
}
