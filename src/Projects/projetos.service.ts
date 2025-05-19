import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProjetoDto } from './dto/create-projeto.dto';

const prisma = new PrismaClient();

@Injectable()
export class ProjetosService {
  async create(data: CreateProjetoDto) {
    return prisma.project.create({ data });
  }

  async findAll() {
    return prisma.project.findMany({ include: { landProject: true, company: true } });
  }

  async findOne(id: string) {
    return prisma.project.findUnique({ where: { id }, include: { landProject: true, company: true } });
  }

  async update(id: string, data: Partial<CreateProjetoDto>) {
    return prisma.project.update({ where: { id }, data });
  }

  async remove(id: string) {
    return prisma.project.delete({ where: { id } });
  }
}
