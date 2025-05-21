import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(data: CreateUsuarioDto): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        user_type: import(".prisma/client").$Enums.UserType;
        phone: string | null;
        created_at: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        user_type: import(".prisma/client").$Enums.UserType;
        phone: string | null;
        created_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        user_type: import(".prisma/client").$Enums.UserType;
        phone: string | null;
        created_at: Date;
    } | null>;
    update(id: string, data: Partial<CreateUsuarioDto>): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        user_type: import(".prisma/client").$Enums.UserType;
        phone: string | null;
        created_at: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        user_type: import(".prisma/client").$Enums.UserType;
        phone: string | null;
        created_at: Date;
    }>;
}
