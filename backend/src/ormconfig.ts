import { join } from "path";
import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";
import { UserEntity } from "./database/entity/user.entity";
import { UserInfoEntity } from "./database/entity/user_info.entity";
import { ServiceEntity } from "./database/entity/service.entity";
import { SubServiceEntity } from "./database/entity/sub_service.entity";
import { SubServiceFeatureEntity } from "./database/entity/sub_service_features.entity";
import { EmployeeEntity } from "./database/entity/employee.entity";

dotenv.config();
const connectionOptions: ConnectionOptions = {
  type: "postgres",
  host: process.env.Host || "localhost",
  port: 5432,
  username: process.env.User || "postgres",
  password: process.env.DB_Password || "12345678",
  database: process.env.Database || "postgres",
  synchronize: true,
  logging: !process.env.DB_NO_LOGS,
  entities: [
    EmployeeEntity,
    ServiceEntity,
    SubServiceEntity,
    SubServiceFeatureEntity,
    UserEntity,
    UserInfoEntity,
  ],
  dropSchema: false,
  migrationsRun: true,
  logger: "debug",
  migrations: [join(__dirname, "src/migration/**/*.ts")],
};

export = connectionOptions;
