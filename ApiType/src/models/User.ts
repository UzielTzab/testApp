// models/User.ts
export interface User {
    ID: number;
    NombreUsuario: string;
    FechaNacimiento: Date;
    Genero: string;
    Telefono: string;
    CorreoElectronico: string;
    Contraseña: string;
    TipoUsuarioID: number;
    Foto: string;
}
