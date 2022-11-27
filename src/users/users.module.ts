import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MentorDetails } from './entities/mentors-details.entity';
import { Programmes } from './entities/programmes.entity';
import { User } from './entities/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ User, Programmes, MentorDetails ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
