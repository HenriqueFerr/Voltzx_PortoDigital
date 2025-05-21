/*
  Warnings:

  - You are about to alter the column `name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Investment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Investor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Land` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CompanyToProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InvestmentToInvestor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LandTolandOwners` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `owners` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[projectId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[companiesId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `area` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimatedReturn` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `powerKw` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusApproval" AS ENUM ('pending_approval', 'active', 'completed');

-- CreateEnum
CREATE TYPE "OwnerAgree" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "CompanyAgree" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "StatusInvesiment" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "statusProposal" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "OwnerAgreeProposal" AS ENUM ('pending', 'accepted', 'rejected');

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_userId_fkey";

-- DropForeignKey
ALTER TABLE "Investor" DROP CONSTRAINT "Investor_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyToProject" DROP CONSTRAINT "_CompanyToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyToProject" DROP CONSTRAINT "_CompanyToProject_B_fkey";

-- DropForeignKey
ALTER TABLE "_InvestmentToInvestor" DROP CONSTRAINT "_InvestmentToInvestor_A_fkey";

-- DropForeignKey
ALTER TABLE "_InvestmentToInvestor" DROP CONSTRAINT "_InvestmentToInvestor_B_fkey";

-- DropForeignKey
ALTER TABLE "_LandTolandOwners" DROP CONSTRAINT "_LandTolandOwners_A_fkey";

-- DropForeignKey
ALTER TABLE "_LandTolandOwners" DROP CONSTRAINT "_LandTolandOwners_B_fkey";

-- DropForeignKey
ALTER TABLE "owners" DROP CONSTRAINT "owners_userId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "area" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "companiesId" TEXT,
ADD COLUMN     "cost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "estimatedReturn" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "powerKw" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "projectId" TEXT NOT NULL,
ADD COLUMN     "status" "StatusApproval" NOT NULL DEFAULT 'pending_approval',
ADD COLUMN     "title" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Investment";

-- DropTable
DROP TABLE "Investor";

-- DropTable
DROP TABLE "Land";

-- DropTable
DROP TABLE "_CompanyToProject";

-- DropTable
DROP TABLE "_InvestmentToInvestor";

-- DropTable
DROP TABLE "_LandTolandOwners";

-- DropTable
DROP TABLE "owners";

-- CreateTable
CREATE TABLE "Lands" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "avaliability" BOOLEAN NOT NULL DEFAULT true,
    "street" VARCHAR(255) NOT NULL,
    "number" VARCHAR(255) NOT NULL,
    "complement" VARCHAR(255) NOT NULL,
    "district" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "postalCode" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,

    CONSTRAINT "Lands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landowners" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "document_id" VARCHAR(255) NOT NULL,

    CONSTRAINT "landowners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "document_id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investors" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "document_id" TEXT NOT NULL,

    CONSTRAINT "investors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invesiment" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "investorId" TEXT NOT NULL,
    "valueInvested" DOUBLE PRECISION NOT NULL,
    "investedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerAgree" "OwnerAgree" NOT NULL DEFAULT 'pending',
    "compAgree" "CompanyAgree" NOT NULL DEFAULT 'pending',
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "status" "StatusInvesiment" NOT NULL DEFAULT 'pending',

    CONSTRAINT "Invesiment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projectProposal" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "landsId" TEXT NOT NULL,
    "statusProjectProposal" "statusProposal" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerAgreeProjectProposal" "OwnerAgreeProposal" NOT NULL DEFAULT 'pending',

    CONSTRAINT "projectProposal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lands_ownerId_key" ON "Lands"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "landowners_userId_key" ON "landowners"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "companies_userId_key" ON "companies"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "companies_document_id_key" ON "companies"("document_id");

-- CreateIndex
CREATE UNIQUE INDEX "investors_userId_key" ON "investors"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Invesiment_projectId_key" ON "Invesiment"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Invesiment_investorId_key" ON "Invesiment"("investorId");

-- CreateIndex
CREATE UNIQUE INDEX "projectProposal_projectId_key" ON "projectProposal"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "projectProposal_landsId_key" ON "projectProposal"("landsId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectId_key" ON "Project"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_companiesId_key" ON "Project"("companiesId");

-- AddForeignKey
ALTER TABLE "Lands" ADD CONSTRAINT "Lands_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "landowners"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landowners" ADD CONSTRAINT "landowners_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investors" ADD CONSTRAINT "investors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Lands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_companiesId_fkey" FOREIGN KEY ("companiesId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invesiment" ADD CONSTRAINT "Invesiment_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invesiment" ADD CONSTRAINT "Invesiment_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "investors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectProposal" ADD CONSTRAINT "projectProposal_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectProposal" ADD CONSTRAINT "projectProposal_landsId_fkey" FOREIGN KEY ("landsId") REFERENCES "Lands"("id") ON DELETE CASCADE ON UPDATE CASCADE;
