-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Social" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "icon" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER,
    "profileId" INTEGER NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "url" TEXT NOT NULL,
    CONSTRAINT "Social_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Social" ("icon", "id", "label", "name", "order", "profileId", "url") SELECT "icon", "id", "label", "name", "order", "profileId", "url" FROM "Social";
DROP TABLE "Social";
ALTER TABLE "new_Social" RENAME TO "Social";
CREATE TABLE "new_InfoCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "icon" TEXT,
    "name" TEXT NOT NULL,
    "order" INTEGER,
    "profileId" INTEGER NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "InfoCategory_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InfoCategory" ("icon", "id", "name", "order", "profileId") SELECT "icon", "id", "name", "order", "profileId" FROM "InfoCategory";
DROP TABLE "InfoCategory";
ALTER TABLE "new_InfoCategory" RENAME TO "InfoCategory";
CREATE TABLE "new_Information" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoryId" TEXT NOT NULL,
    "city" TEXT,
    "content" TEXT NOT NULL,
    "country" TEXT,
    "description" TEXT,
    "endDate" DATETIME,
    "institution" TEXT,
    "institutionUrl" TEXT,
    "level" INTEGER,
    "startDate" DATETIME,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER,
    "url" TEXT,
    CONSTRAINT "Information_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "InfoCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Information" ("categoryId", "city", "content", "country", "description", "endDate", "id", "institution", "institutionUrl", "level", "order", "startDate", "url") SELECT "categoryId", "city", "content", "country", "description", "endDate", "id", "institution", "institutionUrl", "level", "order", "startDate", "url" FROM "Information";
DROP TABLE "Information";
ALTER TABLE "new_Information" RENAME TO "Information";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
