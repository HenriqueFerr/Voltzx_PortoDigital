import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreatePropostaDto } from './dto/create-proposta.dto';

const prisma = new PrismaClient();

@Injectable()
export class PropostasService {
  async create(data: CreatePropostaDto) {
    return prisma.projectProposal.create({ data });
  }

  async findAll() {
    return prisma.projectProposal.findMany({ include: { projects: true, lands: true } });
  }

  async findOne(id: string) {
    return prisma.projectProposal.findUnique({ where: { id }, include: { projects: true, lands: true } });
  }

  async update(id: string, data: Partial<CreatePropostaDto>) {
    return prisma.projectProposal.update({ where: { id }, data });
  }

  async remove(id: string) {
    return prisma.projectProposal.delete({ where: { id } });
  }
}

