import { Injectable } from '@nestjs/common';
import { Information, Institution, Knowledge, Prisma } from '@prisma/client';
import { PrismaService } from 'database/sqlite/prisma.service';

@Injectable()
export class InformationService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get the institution information from the information.
   *
   * @param id The information id.
   * @returns The institution information.
   **/
  async getInstitution(id: string): Promise<Institution> {
    return this.prisma.information.findUnique({ where: { id } }).institution();
  }

  /**
   * Get the knowledge from the information.
   *
   * @param id The information id.
   * @returns The knowledge asociated to the information.
   */
  async getKnowledge(id: string): Promise<Knowledge> {
    return this.prisma.information.findUnique({ where: { id } }).knowledge();
  }

  /**
   * Get the information from category on the database.
   *
   * @param categoryId The category id to search.
   * @returns The information from the database.
   **/
  async getInformations(categoryId: string): Promise<Information[]> {
    return this.prisma.information.findMany({
      where: { categoryId },
      orderBy: [{ level: 'desc' }, { order: 'asc' }],
    });
  }

  /**
   * Create a information on the database.
   *
   * @param data The information data.
   * @returns The information with the created data.
   **/
  async createInformation(
    data: Prisma.InformationUncheckedCreateInput,
  ): Promise<Information> {
    return this.prisma.information.create({ data });
  }

  /**
   * Update a information on the database.
   *
   * @param id The information id.
   * @param data The information data.
   * @returns The information with the updated data.
   **/
  async updateInformation(
    id: string,
    data: Prisma.InformationUpdateInput,
  ): Promise<Information> {
    return this.prisma.information.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete a information on the database.
   *
   * @param id The information id.
   * @returns The deleted information's data.
   **/
  async deleteInformation(id: string): Promise<Information> {
    return this.prisma.information.delete({ where: { id } });
  }
}
