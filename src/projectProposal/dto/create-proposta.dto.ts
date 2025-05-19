export class CreatePropostaDto {
  projectId: string;
  landsId: string;
  statusProjectProposal?: 'pending' | 'accepted' | 'rejected';
  ownerAgreeProjectProposal?: 'pending' | 'accepted' | 'rejected';
}
