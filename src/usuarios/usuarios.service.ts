import { Injectable } from '@nestjs/common';
import { Prisma, Users, PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

@Injectable()
export class UsuariosService {
  async create(data: Prisma.UsersCreateInput) {
    return await prisma.users.create({ data });
  }

  async findAll() {
    return await prisma.users.findMany();
  }

  async findOne(id: string) {
    return await prisma.users.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.UsersUpdateInput) {
    return await prisma.users.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await prisma.users.delete({ where: { id } });
  }
}
