import { CreatePropostaDto } from './dto/create-proposta.dto';
export declare class PropostasService {
    create(data: CreatePropostaDto): Promise<{
        id: string;
        projectId: string;
        createdAt: Date;
        landsId: string;
        statusProjectProposal: import(".prisma/client").$Enums.statusProposal;
        ownerAgreeProjectProposal: import(".prisma/client").$Enums.OwnerAgreeProposal;
    }>;
    findAll(): Promise<({
        lands: {
            number: string;
            id: string;
            area: number;
            ownerId: string;
            avaliability: boolean;
            street: string;
            complement: string | null;
            district: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
        };
        projects: {
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
        };
    } & {
        id: string;
        projectId: string;
        createdAt: Date;
        landsId: string;
        statusProjectProposal: import(".prisma/client").$Enums.statusProposal;
        ownerAgreeProjectProposal: import(".prisma/client").$Enums.OwnerAgreeProposal;
    })[]>;
    findOne(id: string): Promise<({
        lands: {
            number: string;
            id: string;
            area: number;
            ownerId: string;
            avaliability: boolean;
            street: string;
            complement: string | null;
            district: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
        };
        projects: {
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
        };
    } & {
        id: string;
        projectId: string;
        createdAt: Date;
        landsId: string;
        statusProjectProposal: import(".prisma/client").$Enums.statusProposal;
        ownerAgreeProjectProposal: import(".prisma/client").$Enums.OwnerAgreeProposal;
    }) | null>;
    update(id: string, data: Partial<CreatePropostaDto>): Promise<{
        id: string;
        projectId: string;
        createdAt: Date;
        landsId: string;
        statusProjectProposal: import(".prisma/client").$Enums.statusProposal;
        ownerAgreeProjectProposal: import(".prisma/client").$Enums.OwnerAgreeProposal;
    }>;
    remove(id: string): Promise<{
        id: string;
        projectId: string;
        createdAt: Date;
        landsId: string;
        statusProjectProposal: import(".prisma/client").$Enums.statusProposal;
        ownerAgreeProjectProposal: import(".prisma/client").$Enums.OwnerAgreeProposal;
    }>;
}
