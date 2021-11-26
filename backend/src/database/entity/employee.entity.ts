import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ServiceEntity } from "./service.entity";

@Entity("employee")
export class EmployeeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  employee_id!: string;
  @Column({ nullable: false })
  employee_name!: string;
  @Column({ nullable: false })
  employee_description!: string;
  @Column({ nullable: false })
  employee_image!: string;

  //* Connetions

  // * Connected to ServiceEntity
  @ManyToOne(() => ServiceEntity, (parent_service) => parent_service.employee)
  parent_service!: ServiceEntity;
}
