export class CreateProjetoDto {
  projectId: string;
  companiesId: string;
  powerKw: number;
  cost: number;
  estimatedReturn: number;
  title: string;
  description: string;
  area: number;
  status?: 'pending_approval' | 'active' | 'completed';
}
