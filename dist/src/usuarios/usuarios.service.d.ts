import { CreateUsuarioDto } from './dto/create-usuario.dto';
export declare class UsuariosService {
    create(data: CreateUsuarioDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: Partial<CreateUsuarioDto>): Promise<any>;
    remove(id: string): Promise<any>;
}
