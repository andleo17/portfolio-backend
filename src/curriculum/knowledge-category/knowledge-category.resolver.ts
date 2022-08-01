import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { KnowledgeModel } from 'curriculum/knowledge/knowledge.model';
import {
  CreateKnowledgeCategoryInput,
  KnowledgeCategoryModel,
  UpdateKnowledgeCategoryInput,
} from './knowledge-category.model';
import { KnowledgeCategoryService } from './knowledge-category.service';

@Resolver(KnowledgeCategoryModel)
export class KnowledgeCategoryResolver {
  constructor(
    private readonly knowledgeCategoryService: KnowledgeCategoryService,
  ) {}

  @ResolveField(() => [KnowledgeModel])
  async knowledges(
    @Root() { id }: KnowledgeCategoryModel,
  ): Promise<KnowledgeModel[]> {
    return this.knowledgeCategoryService.getKnowledges(id);
  }

  @Query(() => [KnowledgeCategoryModel])
  async getKnowledgeCategories(): Promise<KnowledgeCategoryModel[]> {
    return this.knowledgeCategoryService.getKnowledgeCategories();
  }

  @Mutation(() => KnowledgeCategoryModel)
  async createKnowledgeCategory(
    @Args('input') input: CreateKnowledgeCategoryInput,
  ): Promise<KnowledgeCategoryModel> {
    return this.knowledgeCategoryService.createKnowledgeCategory(input);
  }

  @Mutation(() => KnowledgeCategoryModel)
  async updateKnowledgeCategory(
    @Args('id') id: string,
    @Args('input') input: UpdateKnowledgeCategoryInput,
  ): Promise<KnowledgeCategoryModel> {
    return this.knowledgeCategoryService.updateKnowledgeCategory(id, input);
  }

  @Mutation(() => KnowledgeCategoryModel)
  async deleteKnowledgeCategory(
    @Args('id') id: string,
  ): Promise<KnowledgeCategoryModel> {
    return this.knowledgeCategoryService.deleteKnowledgeCategory(id);
  }
}
