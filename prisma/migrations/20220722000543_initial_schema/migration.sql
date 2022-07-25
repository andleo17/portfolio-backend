-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "portfolio" TEXT
);

-- CreateTable
CREATE TABLE "Social" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "icon" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profileId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    CONSTRAINT "Social_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InfoCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "icon" TEXT,
    "name" TEXT NOT NULL,
    "order" INTEGER,
    "profileId" INTEGER NOT NULL,
    CONSTRAINT "InfoCategory_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Information" (
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
    "order" INTEGER,
    "url" TEXT,
    CONSTRAINT "Information_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "InfoCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
