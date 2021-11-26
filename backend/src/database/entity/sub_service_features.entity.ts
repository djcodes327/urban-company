import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ServiceEntity } from "./service.entity";
import { SubServiceEntity } from "./sub_service.entity";

@Entity("sub_service_feature")
export class SubServiceFeatureEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  feature_id!: string;
  @Column({ nullable: false })
  feature_title!: string;
  @Column({ nullable: false, type: "simple-array" })
  feature_images!: string[];
  @Column({ nullable: false, type: "simple-array" })
  feature_services!: string[];
  @Column({ nullable: false })
  feature_timing!: number;
  @Column({ nullable: false })
  feature_ratings!: number;
  @Column({ nullable: false })
  feature_price!: number;

  //* Connetions
  @ManyToOne(() => SubServiceEntity, (parent_service) => parent_service.feature)
  parent_service!: SubServiceEntity;
}
