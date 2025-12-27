import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkHealth(): object {
    return { status: 'OK' };
  }
}
