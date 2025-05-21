import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateOfertaDto } from './dto/create-oferta.dto';

const prisma = new PrismaClient();

@Injectable()
export class OfertasService {
  async create(data: CreateOfertaDto) {
    return prisma.invesiment.create({ data });
  }

  async findAll() {
    return prisma.invesiment.findMany({ include: { project: true, investor: true } });
  }

  async findOne(id: string) {
    return prisma.invesiment.findUnique({ where: { id }, include: { project: true, investor: true } });
  }

  async update(id: string, data: Partial<CreateOfertaDto>) {
    return prisma.invesiment.update({ where: { id }, data });
  }

  async remove(id: string) {
    return prisma.invesiment.delete({ where: { id } });
  }
}
