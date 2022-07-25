import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateInformationInput,
  InformationModel,
  UpdateInformationInput,
} from './information.model';
import { InformationService } from './information.service';

@Resolver(InformationModel)
export class InformationResolver {
  constructor(private readonly informationService: InformationService) {}

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
