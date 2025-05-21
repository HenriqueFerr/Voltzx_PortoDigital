import { Prisma } from '@prisma/client';
export declare class UsuariosService {
    create(data: Prisma.UsersCreateInput): Promise<{
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
    update(id: string, data: Prisma.UsersUpdateInput): Promise<{
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
