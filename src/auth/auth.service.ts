import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async validateUser(email: string, password: string): Promise<string | null> {
    const user = await this.prisma.users.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { sub: user.id, email: user.email, type: user.user_type };
      return this.jwtService.sign(payload);
    }
    return null;
  }
}
