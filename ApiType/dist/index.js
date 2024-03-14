"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mysql_1 = require("mysql");
const FloreriaRoutes_1 = __importDefault(require("./routes/FloreriaRoutes"));
const TipoUsuarioRoutes_1 = __importDefault(require("./routes/TipoUsuarioRoutes"));
const InventarioRoutes_1 = __importDefault(require("./routes/InventarioRoutes"));
const CategoriaProductoRoutes_1 = __importDefault(require("./routes/CategoriaProductoRoutes"));
const ProductoRoutes_1 = __importDefault(require("./routes/ProductoRoutes"));
const FotosProductosRoutes_1 = __importDefault(require("./routes/FotosProductosRoutes"));
const PedidoRoutes_1 = __importDefault(require("./routes/PedidoRoutes"));
const DetallesPedidoRoutes_1 = __importDefault(require("./routes/DetallesPedidoRoutes"));
const MetodoPagoRoutes_1 = __importDefault(require("./routes/MetodoPagoRoutes"));
const EstadoRoutes_1 = __importDefault(require("./routes/EstadoRoutes"));
const PagoRoutes_1 = __importDefault(require("./routes/PagoRoutes"));
const NotificacionRoutes_1 = __importDefault(require("./routes/NotificacionRoutes"));
const DireccionesEnvioRoutes_1 = __importDefault(require("./routes/DireccionesEnvioRoutes"));
const ComentarioResenaProductoRoutes_1 = __importDefault(require("./routes/ComentarioResenaProductoRoutes"));
const CancelacionesRoutes_1 = __importDefault(require("./routes/CancelacionesRoutes"));
const DevolucionesRoutes_1 = __importDefault(require("./routes/DevolucionesRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware para manejar datos JSON
app.use(express_1.default.json());
app.use('/api', FloreriaRoutes_1.default);
app.use('/api', TipoUsuarioRoutes_1.default);
app.use('/api', InventarioRoutes_1.default);
app.use('/api', CategoriaProductoRoutes_1.default);
app.use('/api', ProductoRoutes_1.default);
app.use('/api', FotosProductosRoutes_1.default);
app.use('/api', PedidoRoutes_1.default);
app.use('/api', DetallesPedidoRoutes_1.default);
app.use('/api', MetodoPagoRoutes_1.default);
app.use('/api', EstadoRoutes_1.default);
app.use('/api', PagoRoutes_1.default);
app.use('/api', NotificacionRoutes_1.default);
app.use('/api', DireccionesEnvioRoutes_1.default);
app.use('/api', ComentarioResenaProductoRoutes_1.default);
app.use('/api', CancelacionesRoutes_1.default);
app.use('/api', DevolucionesRoutes_1.default);
// Configuración de la conexión a la base de datos
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mydatabase'
};
// Crear la conexión a la base de datos
const connection = (0, mysql_1.createConnection)(dbConfig);
// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        process.exit(1);
    }
    console.log('Conexión a la base de datos establecida correctamente');
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
