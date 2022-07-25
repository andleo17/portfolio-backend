import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateSocialInput,
  SocialModel,
  UpdateSocialInput,
} from './social.model';
import { SocialService } from './social.service';

@Resolver(SocialModel)
export class SocialResolver {
  constructor(private readonly socialService: SocialService) {}

  @Query(() => [SocialModel])
  async socials(): Promise<SocialModel[]> {
    return this.socialService.getSocials();
  }

  @Mutation(() => SocialModel)
  async createSocial(
    @Args('input') social: CreateSocialInput,
  ): Promise<SocialModel> {
    return this.socialService.createSocial(social);
  }

  @Mutation(() => SocialModel, { nullable: true })
  async updateSocial(
    @Args('id') id: string,
    @Args('input') social: UpdateSocialInput,
  ): Promise<SocialModel> {
    return this.socialService.updateSocial(id, social);
  }

  @Mutation(() => SocialModel, { nullable: true })
  async deleteSocial(@Args('id') id: string): Promise<SocialModel> {
    return this.socialService.deleteSocial(id);
  }
}
