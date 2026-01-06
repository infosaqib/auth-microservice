import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { JwtModule } from './services/jwt/jwt.module';

@Module({
  imports: [DomainModule, JwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
