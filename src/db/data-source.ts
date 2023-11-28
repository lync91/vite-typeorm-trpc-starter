import 'reflect-metadata'
import 'dotenv/config'
import { DataSource } from 'typeorm'
import { User } from './entities/User'

import DataSourceProd from "./data-source-prod";
import DataSourceLocal from "./data-source-local";

export const AppDataSource = process.env.NODE_ENV === "production"
? DataSourceProd
: DataSourceLocal;

export default process.env.NODE_ENV === "production"
  ? DataSourceProd
  : DataSourceLocal;