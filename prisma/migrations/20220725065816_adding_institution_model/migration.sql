/*
  Warnings:

  - You are about to drop the column `institution` on the `Information` table. All the data in the column will be lost.
  - You are about to drop the column `institutionUrl` on the `Information` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Information" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoryId" TEXT NOT NULL,
    "city" TEXT,
    "content" TEXT NOT NULL,
    "country" TEXT,
    "description" TEXT,
    "endDate" DATETIME,
    "institutionId" TEXT,
    "level" INTEGER,
    "startDate" DATETIME,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER,
    "url" TEXT,
    CONSTRAINT "Information_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "InfoCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Information_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Information" ("categoryId", "city", "content", "country", "description", "endDate", "id", "level", "order", "startDate", "state", "url") SELECT "categoryId", "city", "content", "country", "description", "endDate", "id", "level", "order", "startDate", "state", "url" FROM "Information";
DROP TABLE "Information";
ALTER TABLE "new_Information" RENAME TO "Information";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
