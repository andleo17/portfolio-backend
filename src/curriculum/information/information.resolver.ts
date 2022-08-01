import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { InstitutionModel } from 'curriculum/institution/institution.model';
import { KnowledgeModel } from 'curriculum/knowledge/knowledge.model';
import {
  CreateInformationInput,
  InformationModel,
  UpdateInformationInput,
} from './information.model';
import { InformationService } from './information.service';

@Resolver(InformationModel)
export class InformationResolver {
  constructor(private readonly informationService: InformationService) {}

  @ResolveField(() => InstitutionModel, { nullable: true })
  async institution(
    @Root() { id }: InformationModel,
  ): Promise<InstitutionModel> {
    return this.informationService.getInstitution(id);
  }

  @ResolveField(() => KnowledgeModel, { nullable: true })
  async knowledge(@Root() { id }: InformationModel): Promise<KnowledgeModel> {
    return this.informationService.getKnowledge(id);
  }

  @Query(() => [InformationModel])
  async getInformations(
    @Args('categoryId') categoryId: string,
  ): Promise<InformationModel[]> {
    return this.informationService.getInformations(categoryId);
  }

  @Mutation(() => InformationModel)
  async createInformation(
    @Args('input') information: CreateInformationInput,
  ): Promise<InformationModel> {
    return this.informationService.createInformation(information);
  }

  @Mutation(() => InformationModel, { nullable: true })
  async updateInformation(
    @Args('id') id: string,
    @Args('input') information: UpdateInformationInput,
  ): Promise<InformationModel> {
    return this.informationService.updateInformation(id, information);
  }

  @Mutation(() => InformationModel, { nullable: true })
  async deleteInformation(@Args('id') id: string): Promise<InformationModel> {
    return this.informationService.deleteInformation(id);
  }
}
