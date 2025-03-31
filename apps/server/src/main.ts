import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = app.get(ConfigService);
    app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));

    //enable validation for DTOs
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        })
    );

    //enable CORS for all origins and methods
    app.enableCors({
        origin: config.getOrThrow<string>('CORS_ORIGIN'),
        credentials: true,
        exposedHeaders: ['set-cookie'],
    });

    await app.listen(config.get<number>('APP_PORT') ?? 3000);
}
bootstrap();
