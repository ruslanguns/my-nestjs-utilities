import { Injectable } from '@nestjs/common';

@Injectable()
export class NestUtilities {
    public getHello() {
        return 'Hello from package library.';
    }
}
