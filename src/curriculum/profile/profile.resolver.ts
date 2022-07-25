import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { InfoCategoryModel } from '../info-category/info-category.model';
import {
  CreateProfileInput,
  ProfileModel,
  UpdateProfileInput,
} from './profile.model';
import { SocialModel } from '../social/social.model';
import { ProfileService } from './profile.service';

@Resolver(ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @ResolveField(() => [InfoCategoryModel])
  async info(): Promise<InfoCategoryModel[]> {
    return this.profileService.getInfoCategories();
  }

  @ResolveField(() => [SocialModel])
  async socials(): Promise<SocialModel[]> {
    return this.profileService.getSocials();
  }

  @Query(() => ProfileModel)
  async profile(): Promise<ProfileModel> {
    return this.profileService.getProfile();
  }

  @Mutation(() => ProfileModel)
  async createProfile(
    @Args('input') input: CreateProfileInput,
  ): Promise<ProfileModel> {
    return this.profileService.createProfile(input);
  }

  @Mutation(() => ProfileModel)
  async updateProfile(
    @Args('input') input: UpdateProfileInput,
  ): Promise<ProfileModel> {
    return this.profileService.updateProfile(input);
  }
}
