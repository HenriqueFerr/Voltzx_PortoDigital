import { ProjetosService } from './projetos.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
export declare class ProjetosController {
    private readonly projetosService;
    constructor(projetosService: ProjetosService);
    create(data: CreateProjetoDto): Promise<{
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    }>;
    findAll(): Promise<({
        landProject: {
            number: string;
            id: string;
            area: number;
            ownerId: string;
            street: string;
            complement: string | null;
            district: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
            avaliability: boolean;
        };
        company: {
            id: string;
            userId: string;
            document_id: string;
            company_name: string;
        } | null;
    } & {
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    })[]>;
    findOne(id: string): Promise<({
        landProject: {
            number: string;
            id: string;
            area: number;
            ownerId: string;
            street: string;
            complement: string | null;
            district: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
            avaliability: boolean;
        };
        company: {
            id: string;
            userId: string;
            document_id: string;
            company_name: string;
        } | null;
    } & {
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    }) | null>;
    update(id: string, data: Partial<CreateProjetoDto>): Promise<{
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    }>;
}
