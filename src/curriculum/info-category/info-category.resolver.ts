import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import {
  CreateInfoCategoryInput,
  InfoCategoryModel,
  UpdateInfoCategoryInput,
} from './info-category.model';
import { InformationModel } from '../information/information.model';
import { InfoCategoryService } from './info-category.service';

@Resolver(InfoCategoryModel)
export class InfoCategoryResolver {
  constructor(private readonly categoryService: InfoCategoryService) {}

  @ResolveField(() => [InformationModel])
  async information(
    @Root() { id }: InfoCategoryModel,
  ): Promise<InformationModel[]> {
    return this.categoryService.getInformation(id);
  }

  @Query(() => [InfoCategoryModel])
  async infoCategories(): Promise<InfoCategoryModel[]> {
    return this.categoryService.getInfoCategories();
  }

  @Mutation(() => InfoCategoryModel)
  async createInfoCategory(
    @Args('input') input: CreateInfoCategoryInput,
  ): Promise<InfoCategoryModel> {
    return this.categoryService.createInfoCategory(input);
  }

  @Mutation(() => InfoCategoryModel, { nullable: true })
  async updateInfoCategory(
    @Args('id') id: string,
    @Args('input') input: UpdateInfoCategoryInput,
  ): Promise<InfoCategoryModel> {
    return this.categoryService.updateInfoCategory(id, input);
  }

  @Mutation(() => InfoCategoryModel, { nullable: true })
  async deleteInfoCategory(@Args('id') id: string): Promise<InfoCategoryModel> {
    return this.categoryService.deleteInfoCategory(id);
  }
}
