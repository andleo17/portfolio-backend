import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Social')
export class SocialModel {
  @Field(() => ID)
  id: string;

  @Field()
  icon: string;

  @Field()
  label: string;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field(() => Int)
  profileId: number;

  @Field()
  state: boolean;

  @Field()
  url: string;
}

@InputType()
export class CreateSocialInput {
  @Field()
  icon: string;

  @Field()
  label: string;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field({ nullable: true })
  state: boolean;

  @Field()
  url: string;
}

@InputType()
export class UpdateSocialInput {
  @Field({ nullable: true })
  icon?: string;

  @Field({ nullable: true })
  label?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  order?: number;

  @Field({ nullable: true })
  state?: boolean;

  @Field({ nullable: true })
  url?: string;
}
