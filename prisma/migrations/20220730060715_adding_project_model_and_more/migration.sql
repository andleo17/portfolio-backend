-- CreateTable
CREATE TABLE "KnowledgeCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Knowledge" (
    "informationId" TEXT NOT NULL PRIMARY KEY,
    "icon" TEXT NOT NULL,
    "knowledgeCategoryId" TEXT NOT NULL,
    CONSTRAINT "Knowledge_informationId_fkey" FOREIGN KEY ("informationId") REFERENCES "Information" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Knowledge_knowledgeCategoryId_fkey" FOREIGN KEY ("knowledgeCategoryId") REFERENCES "KnowledgeCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "name" TEXT NOT NULL,
    "order" INTEGER,
    "profileId" INTEGER NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "url" TEXT,
    CONSTRAINT "Project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
