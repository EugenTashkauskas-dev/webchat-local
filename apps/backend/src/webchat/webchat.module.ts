import { Module } from '@nestjs/common';
import { WebchatController } from './webchat.controller';

@Module({
  controllers: [WebchatController]
})
export class WebchatModule {}
