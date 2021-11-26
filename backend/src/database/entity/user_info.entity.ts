import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("user_info")
export class UserInfoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_info_id!: string;
  @Column({ nullable: false })
  user_info_address!: string;
  @Column({ nullable: false })
  user_info_address_type!: string; // HOME / OFFICE / WORK
  @Column({ nullable: false, type: "decimal" })
  user_info_address_lat!: string;
  @Column({ nullable: false, type: "decimal" })
  user_info_address_lng!: string;
  @Column({ nullable: false })
  user_email!: string;
  @Column({ nullable: false })
  user_password!: string;

  //! Connections

  @ManyToOne(() => UserEntity, (user) => user.user_info)
  user!: UserEntity;
}
