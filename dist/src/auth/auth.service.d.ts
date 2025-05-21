import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    validateUser(email: string, password: string): Promise<string | null>;
}
