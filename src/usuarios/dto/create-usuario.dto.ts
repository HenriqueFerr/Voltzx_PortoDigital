export class CreateUsuarioDto {
  name!: string;
  email!: string;
  password!: string;
  phone!: string;
  user_type!: 'INVESTOR' | 'OWNER' | 'COMPANY'; 
}
