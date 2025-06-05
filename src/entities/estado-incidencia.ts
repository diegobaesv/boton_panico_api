import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estado_incidencias')
export class EstadoIncidencia {
    @PrimaryGeneratedColumn({ name: 'id_estado_incidencia' })
    idEstadoIncidencia: number;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;
}