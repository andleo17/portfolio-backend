import { Injectable } from '@nestjs/common';
import { InfoCategory, Prisma, Profile, Social } from '@prisma/client';
import { PrismaService } from 'database/sqlite/prisma.service';
import { InfoCategoryService } from '../info-category/info-category.service';
import { SocialService } from '../social/social.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly categoryService: InfoCategoryService,
    private readonly socialService: SocialService,
  ) {}

  /**
   * Get all the information categories asociated to profile.
   *
   * @returns The information categories asociated to profile.
   **/
  async getInfoCategories(): Promise<InfoCategory[]> {
    return this.categoryService.getInfoCategories();
  }

  /**
   * Get all the socials asociated to profile.
   *
   * @returns The socials asociated to profile.
   **/
  async getSocials(): Promise<Social[]> {
    return this.socialService.getSocials();
  }

  /**
   * Get the unique profile from the database.
   *
   * @returns The unique profile on the database.
   */
  async getProfile(): Promise<Profile> {
    return this.prisma.profile.findFirst();
  }

  /**
   * Create the unique profile on the database.
   *
   * @param data The profile data.
   * @returns The profile with the created data.
   */
  async createProfile(
    data: Omit<Prisma.ProfileCreateInput, 'id'>,
  ): Promise<Profile> {
    return this.prisma.profile.create({ data: { id: 1, ...data } });
  }

  /**
   * Update the unique profile on the database.
   *
   * @param data The profile data.
   * @returns The profile with the updated data.
   */
  async updateProfile(data: Prisma.ProfileUpdateInput): Promise<Profile> {
    return this.prisma.profile.update({ where: { id: 1 }, data });
  }
}
