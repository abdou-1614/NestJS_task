import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  synchronize: false,
};

const dataSource = new DataSource(config)
export default dataSource