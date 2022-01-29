import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolve';
import { UsersService } from './users.service';

@Module({})
export class UsersModule {
  providers: [UsersResolver, UsersService];
}
