import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./rol";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @ManyToOne(() => Rol, (rol) => rol.idRol)
    @JoinColumn({ name: 'id_rol' })
    rol: Rol;

    @Column({ name: 'url_imagen' })
    urlImagen: string;

    @Column({ name: 'tipo_documento' })
    tipoDocumento: string;

    @Column({ name: 'numero_documento' })
    numeroDocumento: string;

    @Column({ name: 'nombres' })
    nombres: string;

    @Column({ name: 'apellidoPaterno' })
    apellidoPaterno: string;

    @Column({ name: 'apellidoMaterno' })
    apellidoMaterno: string;

    @Column({ name: 'correo' })
    correo: string;

    @Column({ name: 'celular' })
    celular: string;

    @Column({ name: 'direccion'})
    direccion: string;

    @Column({ name: 'clave' })
    clave: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;
}