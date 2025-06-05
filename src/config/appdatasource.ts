import 'dotenv/config';
import { DataSource } from "typeorm";
import { Incidencia } from "../entities/incidencia";
import { TipoIncidencia } from "../entities/tipo-incidencia";
import { EstadoIncidencia } from '../entities/estado-incidencia';

const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT as any || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'name',
    entities: [
        Incidencia,
        TipoIncidencia,
        EstadoIncidencia,
    ]
});

export default AppDataSource;