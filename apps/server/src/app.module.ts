import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { IS_DEV_ENV } from './libs/common/utils/isDev';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            ignoreEnvFile: !IS_DEV_ENV,
        }),
        UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
