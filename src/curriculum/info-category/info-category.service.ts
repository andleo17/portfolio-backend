import { Injectable } from '@nestjs/common';
import { InfoCategory, Information, Prisma } from '@prisma/client';
import { PrismaService } from 'database/sqlite/prisma.service';
import { InformationService } from '../information/information.service';

@Injectable()
export class InfoCategoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly infoService: InformationService,
  ) {}

  /**
   * Get the info categories from the database.
   *
   * @param id The info category id to search.
   * @returns The information asociated to the category from the database.
   **/
  async getInformation(id: string): Promise<Information[]> {
    return this.infoService.getInformations(id);
  }

  /**
   * Get all the info categories from the database.
   *
   * @returns The info categories from the database.
   **/
  async getInfoCategories(): Promise<InfoCategory[]> {
    return this.prisma.infoCategory.findMany({ orderBy: { order: 'asc' } });
  }

  /**
   * Create a info category on the database.
   *
   * @param infoCategory The info category data.
   * @returns The info category with the created data.
   **/
  async createInfoCategory(
    infoCategory: Omit<Prisma.InfoCategoryUncheckedCreateInput, 'profileId'>,
  ): Promise<InfoCategory> {
    const { name } = infoCategory;
    infoCategory.name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return this.prisma.infoCategory.create({
      data: { ...infoCategory, profileId: 1 },
    });
  }

  /**
   * Update a info category on the database.
   *
   * @param id The info category id.
   * @param data The info category data.
   * @returns The info category with the updated data.
   **/
  async updateInfoCategory(
    id: string,
    data: Prisma.InfoCategoryUpdateInput,
  ): Promise<InfoCategory> {
    return this.prisma.infoCategory.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete a info category on the database.
   *
   * @param id The info category id.
   * @returns The deleted info category's data.
   **/
  async deleteInfoCategory(id: string): Promise<InfoCategory> {
    return this.prisma.infoCategory.delete({ where: { id } });
  }
}
