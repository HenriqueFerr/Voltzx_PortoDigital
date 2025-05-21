import { ProjetosService } from './projetos.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
export declare class ProjetosController {
    private readonly projetosService;
    constructor(projetosService: ProjetosService);
    create(data: CreateProjetoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: Partial<CreateProjetoDto>): Promise<any>;
    remove(id: string): Promise<any>;
}
