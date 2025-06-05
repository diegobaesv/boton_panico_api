import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoIncidencia } from "./tipo-incidencia";
import { EstadoIncidencia } from "./estado-incidencia";

@Entity('incidencias')
export class Incidencia {

    @PrimaryGeneratedColumn({ name: 'id_incidencia' })
    idIncidencia: number;

    @ManyToOne(() => TipoIncidencia, (tipoIncidencia) => tipoIncidencia.idTipoIncidencia)
    @JoinColumn({ name: 'id_tipo_incidencia' })
    tipoIncidencia: TipoIncidencia;

    //ubigeo: Ubigeo;
    //usuarioReporta: Usuario;
    //usuarioAtiende: Usuario;
    
    @Column({name: 'descripcion'})
    descripcion: string;

    @ManyToOne(() => EstadoIncidencia, (estadoIncidencia) => estadoIncidencia.idEstadoIncidencia)
    @JoinColumn({ name: 'id_estado_incidencia' })
    estadoIncidencia: EstadoIncidencia;

    @Column({name: 'fecha_hora_reporte'})
    fechaHoraReporte: Date;

    @Column({name: 'fecha_hora_atencion'})
    fechaHoraAtencion: Date;

    @Column({name: 'latitud'})
    latitud: string;

    @Column({name: 'longitud'})
    longitud: string;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @Column({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

}