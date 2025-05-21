import { OfertasService } from './ofertas.service';
import { CreateOfertaDto } from './dto/create-oferta.dto';
export declare class OfertasController {
    private readonly ofertasService;
    constructor(ofertasService: OfertasService);
    create(data: CreateOfertaDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: Partial<CreateOfertaDto>): Promise<any>;
    remove(id: string): Promise<any>;
}
