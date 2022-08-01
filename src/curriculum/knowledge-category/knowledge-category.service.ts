import { Injectable } from '@nestjs/common';
import { Knowledge, KnowledgeCategory, Prisma } from '@prisma/client';
import { PrismaService } from 'database/sqlite/prisma.service';

@Injectable()
export class KnowledgeCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getKnowledges(id: string): Promise<Knowledge[]> {
    return this.prisma.knowledgeCategory
      .findUnique({ where: { id } })
      .knowledges();
  }

  /**
   * Get the knowledge categories on the database.
   *
   * @returns The knowledge categories from the database.
   **/
  async getKnowledgeCategories(): Promise<KnowledgeCategory[]> {
    return this.prisma.knowledgeCategory.findMany();
  }

  /**
   * Create a knowledge category on the database.
   *
   * @param data The knowledge category data.
   * @returns The knowledge category with the created data.
   **/
  async createKnowledgeCategory(
    data: Prisma.KnowledgeCategoryUncheckedCreateInput,
  ): Promise<KnowledgeCategory> {
    return this.prisma.knowledgeCategory.create({ data });
  }

  /**
   * Update a knowledge category on the database.
   *
   * @param id The knowledge category id.
   * @param data The knowledge category data.
   * @returns The knowledge category with the updated data.
   **/
  async updateKnowledgeCategory(
    id: string,
    data: Prisma.KnowledgeCategoryUpdateInput,
  ): Promise<KnowledgeCategory> {
    return this.prisma.knowledgeCategory.update({ where: { id }, data });
  }

  /**
   * Delete a knowledge category on the database.
   *
   * @param id The knowledge category id.
   * @returns The deleted knowledge category's data.
   **/
  async deleteKnowledgeCategory(id: string): Promise<KnowledgeCategory> {
    return this.prisma.knowledgeCategory.delete({ where: { id } });
  }
}
