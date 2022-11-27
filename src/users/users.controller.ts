import { Controller } from '@nestjs/common';
import { Body, Post, Param, Get } from '@nestjs/common/decorators';
import { ApiConsumes, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger/dist';
import { MentorsDetailsDto } from './dto/create-mentors-details.dto';
import { CrearteProgrammesDto } from './dto/create-programmes.dto';
import { CreateUserDto } from './dto/create-user-dto';
import { GetUsersFilterDto } from './dto/get-user-filter.dto';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userSerivce: UsersService) {}

    @ApiCreatedResponse({
        description: 'User Created Successfully',
        type: [User]
    })
    @ApiOperation({ summary: 'Registration User'})
    // @ApiConsumes('multipart/form-data')
    @Post()
    create(@Body() createDto: CreateUserDto) {
        return this.userSerivce.createUser(createDto)
    }

    @Post(':id/montors')
    createMentorsDetails(@Param('id') id: number, @Body() createDetails: MentorsDetailsDto) {
        return this.userSerivce.createMentorDetails(id, createDetails)
    }

    @Post(':id/programmes')
    async createUserProgrammes(@Param('id')id: number, @Body() createProgrammes: CrearteProgrammesDto) {
        return this.userSerivce.createProgrammes(id, createProgrammes)
    }
    @Get()
    async getUsers() {
        return this.userSerivce.findUsers()
    }
    @Get('mentors/applicant')
    async getUserMentors() {
        return this.userSerivce.findMentorsUsers()
    }

    @Get('mentor_manager/applicant')
    async getUsersMentorMAnager() {
        return this.userSerivce.findMentorManagerUsers()
    }
}
