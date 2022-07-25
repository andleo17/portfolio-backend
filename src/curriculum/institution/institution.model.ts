import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { InformationModel } from 'curriculum/information/information.model';

@ObjectType('Institution')
export class InstitutionModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  url?: string;
}

@InputType()
export class CreateInstitutionInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  url?: string;
}

@InputType()
export class UpdateInstitutionInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  url?: string;
}
