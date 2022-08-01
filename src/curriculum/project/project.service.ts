import { Injectable } from '@nestjs/common';
import { Knowledge, Prisma, Project } from '@prisma/client';
import { PrismaService } from 'database/sqlite/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get the knowledges asociated to a project.
   *
   * @param id The project id.
   * @returns The knowledges asociated to the project.
   **/
  async getKnowledges(id: string): Promise<Knowledge[]> {
    return this.prisma.project.findUnique({ where: { id } }).knowledges();
  }

  /**
   * Get the projects on the database.
   *
   * @returns The projects from the database.
   **/
  async getProjects(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  /**
   * Create a project on the database.
   *
   * @param data The project data.
   * @returns The project with the created data.
   **/
  async createProject(
    data: Omit<Prisma.ProjectUncheckedCreateInput, 'profileId'>,
  ): Promise<Project> {
    return this.prisma.project.create({ data: { ...data, profileId: 1 } });
  }

  /**
   * Update a project on the database.
   *
   * @param id The project id.
   * @param data The project data.
   * @returns The project with the updated data.
   **/
  async updateProject(
    id: string,
    data: Prisma.ProjectUpdateInput,
  ): Promise<Project> {
    return this.prisma.project.update({ where: { id }, data });
  }

  /**
   * Delete a project on the database.
   *
   * @param id The project id.
   * @returns The deleted project's data.
   **/
  async deleteProject(id: string): Promise<Project> {
    return this.prisma.project.delete({ where: { id } });
  }
}
