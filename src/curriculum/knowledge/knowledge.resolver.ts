import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { InformationModel } from 'curriculum/information/information.model';
import { KnowledgeCategoryModel } from 'curriculum/knowledge-category/knowledge-category.model';
import { ProjectModel } from 'curriculum/project/project.model';
import {
  CreateKnowledgeInput,
  KnowledgeModel,
  UpdateKnowledgeInput,
} from './knowledge.model';
import { KnowledgeService } from './knowledge.service';

@Resolver(KnowledgeModel)
export class KnowledgeResolver {
  constructor(private readonly knowledgeService: KnowledgeService) {}

  @ResolveField(() => InformationModel)
  async information(
    @Root() { informationId }: KnowledgeModel,
  ): Promise<InformationModel> {
    return this.knowledgeService.getInformation(informationId);
  }

  @ResolveField(() => [KnowledgeCategoryModel])
  async knowledgeCategory(
    @Root() { informationId }: KnowledgeModel,
  ): Promise<KnowledgeCategoryModel> {
    return this.knowledgeService.getKnowledgeCategory(informationId);
  }

  @ResolveField(() => [ProjectModel])
  async projects(
    @Root() { informationId }: KnowledgeModel,
  ): Promise<ProjectModel[]> {
    return this.knowledgeService.getProjects(informationId);
  }

  @Query(() => [KnowledgeModel])
  async getKnowledges(): Promise<KnowledgeModel[]> {
    return this.knowledgeService.getKnowledges();
  }

  @Mutation(() => KnowledgeModel)
  async createKnowledge(
    @Args('input') input: CreateKnowledgeInput,
  ): Promise<KnowledgeModel> {
    return this.knowledgeService.createKnowledge(input);
  }

  @Mutation(() => KnowledgeModel, { nullable: true })
  async updateKnowledge(
    @Args('id') id: string,
    @Args('input') input: UpdateKnowledgeInput,
  ): Promise<KnowledgeModel> {
    return this.knowledgeService.updateKnowledge(id, input);
  }

  @Mutation(() => KnowledgeModel, { nullable: true })
  async deleteKnowledge(@Args('id') id: string): Promise<KnowledgeModel> {
    return this.knowledgeService.deleteKnowledge(id);
  }
}
