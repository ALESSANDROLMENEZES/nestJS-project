import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const typeOrmConfig: TypeOrmModuleOptions = {
 type: 'postgres',
 host: 'postgres_db',
 port: 5432,
 username: 'postgres',
 password: 'postgres',
 database: 'taskmanagement',
 entities: [`${__dirname}/../**/*.entity.ts`],
 synchronize:true
}