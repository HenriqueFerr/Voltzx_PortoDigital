import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
})
export class AppModule {}
