import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
    const token = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!token) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    return { access_token: token };
  }
}
