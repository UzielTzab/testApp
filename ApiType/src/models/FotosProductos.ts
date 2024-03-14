export interface FotoProducto {
    IDFoto?: number;
    IDProducto: number;
    Foto: Buffer; // O podrías utilizar un tipo de datos adecuado para almacenar la imagen, dependiendo de cómo la manejes en tu aplicación
}
