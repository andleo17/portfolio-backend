import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { ProjectModel } from 'curriculum/project/project.model';
import { InfoCategoryModel } from '../info-category/info-category.model';
import { SocialModel } from '../social/social.model';

@ObjectType('Profile')
export class ProfileModel {
  @Field(() => ID)
  id: number;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  description: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => [InfoCategoryModel])
  info?: InfoCategoryModel[];

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  portfolio?: string;

  @Field(() => [ProjectModel])
  projects?: ProjectModel[];

  @Field(() => [SocialModel])
  socials?: SocialModel[];
}

@InputType()
export class CreateProfileInput {
  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  description: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  image?: string;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  portfolio?: string;
}

@InputType()
export class UpdateProfileInput {
  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  portfolio?: string;
}
