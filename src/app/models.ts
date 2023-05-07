export interface Perfil{
  id: string;
  username: string;
  password: string;
  mail: string;
  name: string;
  surname: string;
  birthdate?: Date;
  gender: string;
  address: string;
  description: string;
  picture: string;
  enabled: boolean;
}
export interface Credentials {
  username: string;
  password: string;
}
