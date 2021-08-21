import { Entidad, TipoUsuario, UserRole, Permisions } from './index';

export interface Usuario {
    idEntidad: number,
    entidad: Entidad,
    username: string,
    password: string,
    tipoUsuario: TipoUsuario,
    userRole: UserRole,
    Permissions: Permisions[]

}
