import { Campos,Picture,Estatus,Owner } from './index';

export interface Entidad {
    nombre: string
    campos: Campos[],
    picture: Picture,
    estatus: Estatus,
    owner: Owner,
    BuildApi(fn)

}
