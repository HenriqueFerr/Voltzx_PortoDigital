import { CreateOfertaDto } from './dto/create-oferta.dto';
export declare class OfertasService {
    create(data: CreateOfertaDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: Partial<CreateOfertaDto>): Promise<any>;
    remove(id: string): Promise<any>;
}
