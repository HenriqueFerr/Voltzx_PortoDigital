import { LandsService } from './lands.service';
import { CreateLandDto } from './dto/create-land.dto';
export declare class LandsController {
    private readonly landsService;
    constructor(landsService: LandsService);
    create(data: CreateLandDto): {
        ownerId: string;
        area: number;
        street: string;
        number: string;
        complement?: string;
        district: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        avaliability?: boolean;
        id: string;
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, data: Partial<CreateLandDto>): any;
    remove(id: string): any;
}
