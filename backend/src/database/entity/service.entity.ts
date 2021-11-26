import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EmployeeEntity } from "./employee.entity";
import { SubServiceEntity } from "./sub_service.entity";

@Entity("service")
export class ServiceEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  service_id!: string;
  @Column({ nullable: false })
  service_title!: string;
  @Column({ nullable: false })
  service_description!: string;
  @Column({ nullable: false })
  service_image!: string;
  @Column({ nullable: false })
  service_tagline!: string;
  @Column({ nullable: false })
  service_category!: string;
  @Column({ nullable: false })
  service_bookings!: number;

  //Connections
  // * Connected to SubServiceEntity
  @OneToMany(
    () => SubServiceEntity,
    (sub_service) => sub_service.parent_service
  )
  @JoinColumn()
  sub_service!: SubServiceEntity;

  // * Connected to EmployeeEntity
  @OneToMany(() => EmployeeEntity, (employee) => employee.parent_service)
  @JoinColumn()
  employee!: EmployeeEntity;
}
