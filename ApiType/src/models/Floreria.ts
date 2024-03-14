// models/Floreria.ts
export interface Floreria {
    ID: number;
    IDUsuario: number;
    IDInventario: number;
    NombreFloreria: string;
    Descripcion: string;
    Direccion: string;
    Telefono: string;
    CorreoElectronico: string;
    RedesSociales: string;
    Foto: Buffer; // Opcionalmente puedes usar un string si estás almacenando la URL de la imagen
}
