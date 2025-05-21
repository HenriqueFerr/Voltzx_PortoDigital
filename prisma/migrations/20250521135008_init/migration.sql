-- DropIndex
DROP INDEX "Invesiment_investorId_key";

-- DropIndex
DROP INDEX "Invesiment_projectId_key";

-- DropIndex
DROP INDEX "Lands_ownerId_key";

-- DropIndex
DROP INDEX "Project_companiesId_key";

-- DropIndex
DROP INDEX "Project_projectId_key";

-- DropIndex
DROP INDEX "projectProposal_landsId_key";

-- DropIndex
DROP INDEX "projectProposal_projectId_key";

-- AlterTable
ALTER TABLE "Invesiment" ALTER COLUMN "investorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Lands" ALTER COLUMN "complement" DROP NOT NULL;
