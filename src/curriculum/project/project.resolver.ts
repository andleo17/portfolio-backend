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
  CreateProjectInput,
  ProjectModel,
  UpdateProjectInput,
} from './project.model';
import { ProjectService } from './project.service';

@Resolver(ProjectModel)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @ResolveField(() => [KnowledgeModel])
  async knowledges(@Root() { id }: ProjectModel): Promise<KnowledgeModel[]> {
    return this.projectService.getKnowledges(id);
  }

  @Query(() => [ProjectModel])
  async getProjects(): Promise<ProjectModel[]> {
    return this.projectService.getProjects();
  }

  @Mutation(() => ProjectModel)
  async createProject(
    @Args('input') input: CreateProjectInput,
  ): Promise<ProjectModel> {
    return this.projectService.createProject({
      ...input,
      knowledges: input.knowledges && {
        connect: input.knowledges.map((id) => ({ informationId: id })),
      },
    });
  }

  @Mutation(() => ProjectModel)
  async updateProject(
    @Args('id') id: string,
    @Args('input') input: UpdateProjectInput,
  ): Promise<ProjectModel> {
    return this.projectService.updateProject(id, {
      ...input,
      knowledges: input.knowledges && {
        set: input.knowledges.map((id) => ({ informationId: id })),
      },
    });
  }

  @Mutation(() => ProjectModel)
  async deleteProject(@Args('id') id: string): Promise<ProjectModel> {
    return this.projectService.deleteProject(id);
  }
}
