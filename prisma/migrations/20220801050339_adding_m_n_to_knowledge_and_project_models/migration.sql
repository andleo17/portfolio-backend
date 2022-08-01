-- CreateTable
CREATE TABLE "_KnowledgeToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_KnowledgeToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Knowledge" ("informationId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_KnowledgeToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_KnowledgeToProject_AB_unique" ON "_KnowledgeToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_KnowledgeToProject_B_index" ON "_KnowledgeToProject"("B");
