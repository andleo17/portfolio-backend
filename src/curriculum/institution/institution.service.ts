import { Injectable } from '@nestjs/common';
import { Institution, Prisma } from '@prisma/client';
import { PrismaService } from 'database/sqlite/prisma.service';

@Injectable()
export class InstitutionService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get the institutions on the database.
   *
   * @returns The institutions from the database.
   **/
  async getInstitutions(): Promise<Institution[]> {
    return this.prisma.institution.findMany();
  }

  /**
   * Create a institution on the database.
   *
   * @param data The institution data.
   * @returns The institution with the created data.
   **/
  async createInstitution(
    data: Prisma.InstitutionUncheckedCreateInput,
  ): Promise<Institution> {
    return this.prisma.institution.create({ data });
  }

  /**
   * Update a institution on the database.
   *
   * @param id The institution id.
   * @param data The institution data.
   * @returns The institution with the updated data.
   **/
  async updateInstitution(
    id: string,
    data: Prisma.InstitutionUpdateInput,
  ): Promise<Institution> {
    return this.prisma.institution.update({ where: { id }, data });
  }

  /**
   * Delete a institution on the database.
   *
   * @param id The institution id.
   * @returns The deleted institution's data.
   **/
  async deleteInstitution(id: string): Promise<Institution> {
    return this.prisma.institution.delete({ where: { id } });
  }
}
