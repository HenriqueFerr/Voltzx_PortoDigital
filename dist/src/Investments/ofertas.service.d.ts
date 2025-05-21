import { CreateOfertaDto } from './dto/create-oferta.dto';
export declare class OfertasService {
    create(data: CreateOfertaDto): Promise<{
        id: string;
        projectId: string;
        investorId: string | null;
        valueInvested: number;
        investedDate: Date;
        ownerAgree: import(".prisma/client").$Enums.OwnerAgree;
        compAgree: import(".prisma/client").$Enums.CompanyAgree;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusInvesiment;
    }>;
    findAll(): Promise<({
        project: {
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
        investor: {
            id: string;
            userId: string;
            document_id: string;
        } | null;
    } & {
        id: string;
        projectId: string;
        investorId: string | null;
        valueInvested: number;
        investedDate: Date;
        ownerAgree: import(".prisma/client").$Enums.OwnerAgree;
        compAgree: import(".prisma/client").$Enums.CompanyAgree;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusInvesiment;
    })[]>;
    findOne(id: string): Promise<({
        project: {
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
        investor: {
            id: string;
            userId: string;
            document_id: string;
        } | null;
    } & {
        id: string;
        projectId: string;
        investorId: string | null;
        valueInvested: number;
        investedDate: Date;
        ownerAgree: import(".prisma/client").$Enums.OwnerAgree;
        compAgree: import(".prisma/client").$Enums.CompanyAgree;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusInvesiment;
    }) | null>;
    update(id: string, data: Partial<CreateOfertaDto>): Promise<{
        id: string;
        projectId: string;
        investorId: string | null;
        valueInvested: number;
        investedDate: Date;
        ownerAgree: import(".prisma/client").$Enums.OwnerAgree;
        compAgree: import(".prisma/client").$Enums.CompanyAgree;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusInvesiment;
    }>;
    remove(id: string): Promise<{
        id: string;
        projectId: string;
        investorId: string | null;
        valueInvested: number;
        investedDate: Date;
        ownerAgree: import(".prisma/client").$Enums.OwnerAgree;
        compAgree: import(".prisma/client").$Enums.CompanyAgree;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusInvesiment;
    }>;
}
