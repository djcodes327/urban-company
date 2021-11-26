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
import { SubServiceFeatureEntity } from "./sub_service_features.entity";

@Entity("sub_service")
export class SubServiceEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  sub_service_id!: string;
  @Column({ nullable: false })
  sub_service_title!: string;
  @Column({ nullable: false })
  sub_service_image!: string;

  //* Connetions

  // * Connected to ServiceEntity
  @ManyToOne(
    () => ServiceEntity,
    (parent_service) => parent_service.sub_service
  )
  parent_service!: ServiceEntity;

  // * Connected to SubServiceFeatureEntity
  @OneToMany(() => SubServiceFeatureEntity, (feature) => feature.parent_service)
  @JoinColumn()
  feature!: SubServiceFeatureEntity;
}
