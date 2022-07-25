import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateInstitutionInput,
  InstitutionModel,
  UpdateInstitutionInput,
} from './institution.model';
import { InstitutionService } from './institution.service';

@Resolver(InstitutionModel)
export class InstitutionResolver {
  constructor(private readonly institutionService: InstitutionService) {}

  @Query(() => [InstitutionModel])
  async getInstitutions(): Promise<InstitutionModel[]> {
    return this.institutionService.getInstitutions();
  }

  @Mutation(() => InstitutionModel)
  async createInstitution(
    @Args('input') institution: CreateInstitutionInput,
  ): Promise<InstitutionModel> {
    return this.institutionService.createInstitution(institution);
  }

  @Mutation(() => InstitutionModel, { nullable: true })
  async updateInstitution(
    @Args('id') id: string,
    @Args('input') institution: UpdateInstitutionInput,
  ): Promise<InstitutionModel> {
    return this.institutionService.updateInstitution(id, institution);
  }

  @Mutation(() => InstitutionModel, { nullable: true })
  async deleteInstitution(@Args('id') id: string): Promise<InstitutionModel> {
    return this.institutionService.deleteInstitution(id);
  }
}
