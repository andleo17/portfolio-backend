import { Injectable } from '@nestjs/common';
import {
  Information,
  Knowledge,
  KnowledgeCategory,
  Prisma,
  Project,
} from '@prisma/client';
import { PrismaService } from 'database/sqlite/prisma.service';

@Injectable()
export class KnowledgeService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get information asociated to a knowledge.
   *
   * @param id The knowledge id.
   * @returns The information asociated to the knowledge.
   **/
  async getInformation(id: string): Promise<Information> {
    return this.prisma.knowledge
      .findUnique({ where: { informationId: id } })
      .information();
  }

  /**
   * Get the category of a knowledge.
   *
   * @param id The knowledge id.
   * @returns The category of the knowledge.
   **/
  async getKnowledgeCategory(id: string): Promise<KnowledgeCategory> {
    return this.prisma.knowledge
      .findUnique({
        where: { informationId: id },
      })
      .knowledgeCategory();
  }

  /**
   * Get the knowledges on the database.
   *
   * @param id The knowledge id.
   * @returns The projects asociated to the knowledge.
   **/
  async getProjects(id: string): Promise<Project[]> {
    return this.prisma.knowledge
      .findUnique({ where: { informationId: id } })
      .projects();
  }

  /**
   * Get the knowledges on the database.
   *
   * @returns The knowledges from the database.
   **/
  async getKnowledges(): Promise<Knowledge[]> {
    return this.prisma.knowledge.findMany();
  }

  /**
   * Create a knowledge on the database.
   *
   * @param data The knowledge data.
   * @returns The knowledge with the created data.
   **/
  async createKnowledge(
    data: Prisma.KnowledgeUncheckedCreateInput,
  ): Promise<Knowledge> {
    return this.prisma.knowledge.create({ data });
  }

  /**
   * Update a knowledge on the database.
   *
   * @param id The knowledge id.
   * @param data The knowledge data.
   * @returns The knowledge with the updated data.
   **/
  async updateKnowledge(
    id: string,
    data: Prisma.KnowledgeUpdateInput,
  ): Promise<Knowledge> {
    return this.prisma.knowledge.update({ where: { informationId: id }, data });
  }

  /**
   * Delete a knowledge on the database.
   *
   * @param id The knowledge id.
   * @returns The deleted knowledge's data.
   **/
  async deleteKnowledge(id: string): Promise<Knowledge> {
    return this.prisma.knowledge.delete({ where: { informationId: id } });
  }
}
