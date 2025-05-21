import { PropostasService } from './propostas.service';
import { CreatePropostaDto } from './dto/create-proposta.dto';
export declare class PropostasController {
    private readonly propostasService;
    constructor(propostasService: PropostasService);
    create(data: CreatePropostaDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: Partial<CreatePropostaDto>): Promise<any>;
    remove(id: string): Promise<any>;
}
