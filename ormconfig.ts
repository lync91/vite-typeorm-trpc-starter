import { DataSourceOptions } from "typeorm";
import { User } from "./src/db/entities";

type SeedType = {
  seeds: string[],
  factories: string[]
}

const config: DataSourceOptions & SeedType = {
  name: "default",
  type: "sqlite",
  database: "dev.db",
  entities: [User],
  synchronize: true,
  logging: false,
  // These two lines have been added:
  seeds: ["src/db/seeding/seeds/**/*{.ts,.js}"],
  factories: ["src/db/seeding/factories/**/*{.ts,.js}"],
}

export default config;