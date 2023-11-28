import { DataSource } from "typeorm";
import { DataSourceOptions } from "typeorm/data-source/DataSourceOptions";

let connectionOptions: DataSourceOptions = {
  type: "mysql", // It could be mysql, mongo, etc
  host: "localhost",
  port: 3306,
  username: "root", // postgre username
  password: "", // postgre password
  database: "test_2", // postgre db, needs to be created before
  synchronize: false, // if true, you don't really need migrations
  logging: true,
  entities: ["src/**/*.entity{.ts,.js}"], // where our entities reside
  migrations: ["src/db/migrations/*{.ts,.js}"], // where our migrations reside
};

export default new DataSource({
  ...connectionOptions,
});