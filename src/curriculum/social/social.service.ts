import { Injectable } from '@nestjs/common';
import { Prisma, Social } from '@prisma/client';
import { PrismaService } from 'database/sqlite/prisma.service';

@Injectable()
export class SocialService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all the socials from the database.
   *
   * @returns The socials from the database.
   **/
  async getSocials(): Promise<Social[]> {
    return this.prisma.social.findMany({ orderBy: { order: 'asc' } });
  }

  /**
   * Create a profile's social on the database.
   *
   * @param social The social data.
   * @returns The social with the created data.
   **/
  async createSocial(
    social: Omit<Prisma.SocialUncheckedCreateInput, 'profileId'>,
  ): Promise<Social> {
    return this.prisma.social.create({ data: { ...social, profileId: 1 } });
  }

  /**
   * Update a profile's social on the database.
   *
   * @param id The social id.
   * @param data The social data.
   * @returns The social with the updated data.
   **/
  async updateSocial(
    id: string,
    data: Prisma.SocialUpdateInput,
  ): Promise<Social> {
    return this.prisma.social.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete a profile's social on the database.
   * @param id The social id.
   * @returns The deleted social's data.
   **/
  async deleteSocial(id: string): Promise<Social> {
    return this.prisma.social.delete({ where: { id } });
  }
}
