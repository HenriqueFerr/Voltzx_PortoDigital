import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<string | null> {
    const user = await prisma.users.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { sub: user.id, email: user.email, type: user.user_type };
      return this.jwtService.sign(payload);
    }
    return null;
  }
}
