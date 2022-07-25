import { Injectable } from '@nestjs/common';
import { Information, Prisma } from '@prisma/client';
import { PrismaService } from 'database/sqlite/prisma.service';

@Injectable()
export class InformationService {
  constructor(private readonly prisma: PrismaService) {}

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
