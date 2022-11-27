import { ConfigModule, ConfigService  } from '@nestjs/config';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('DB_HOST'),
                database: configService.get('DB_DATABASE_NAME'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                entities: ['dist/**/*.entity{.ts,.js}'],
                migrations: ['dist/db/migrations/*{.ts,.js}'],
                migrationsTableName: 'migrations_typeorm',
                synchronize: true
            })
        })
    ]
})
export class DatabaseModule {}