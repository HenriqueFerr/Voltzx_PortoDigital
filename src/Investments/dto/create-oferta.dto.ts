export class CreateOfertaDto {
  projectId: string;
  investorId: string;
  valueInvested: number;
  title: string;
  description: string;
  ownerAgree?: 'pending' | 'accepted' | 'rejected';
  compAgree?: 'pending' | 'accepted' | 'rejected';
  status?: 'pending' | 'accepted' | 'rejected';
}
