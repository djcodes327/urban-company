import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserInfoEntity } from "./user_info.entity";

@Entity("user")
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id!: string;
  @Column({ nullable: false })
  user_name!: string;
  @Column({ nullable: false })
  user_email!: string;
  @Column({ nullable: false })
  user_password!: string;

  //! Connections

  // * Connected to UserInfoEntity
  @OneToMany(() => UserInfoEntity, (user_info) => user_info.user)
  @JoinColumn()
  user_info!: UserInfoEntity;
}
