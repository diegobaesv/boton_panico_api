import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tipo_incidencias')
export class TipoIncidencia {
    @PrimaryGeneratedColumn({ name: 'id_tipo_incidencia' })
    idTipoIncidencia: number;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @Column({ name: 'flag_boton' })
    flagBoton: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;
}