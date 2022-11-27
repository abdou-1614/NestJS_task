import { User } from './entities/users.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { MentorDetails } from './entities/mentors-details.entity';
import { MentorsDetailsDto } from './dto/create-mentors-details.dto';
import { Programmes } from './entities/programmes.entity';
import { CrearteProgrammesDto } from './dto/create-programmes.dto';
import { GetUsersFilterDto } from './dto/get-user-filter.dto';
import { Role } from './entities/role.enum';

@Injectable()
export class UsersService {
    constructor( 
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(MentorDetails) private mentorDetailsRepository: Repository<MentorDetails>,
        @InjectRepository(Programmes) private programmesRepository: Repository<Programmes>
        ) {}

    async createUser( create: CreateUserDto ) {
        const newuser = this.userRepository.create(create)
        await this.userRepository.save(newuser)
        return newuser
    }

    async createMentorDetails(id: number, createMontors: MentorsDetailsDto) {
        const user = await this.userRepository.findOneBy({ id })
        if(!user) {
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND)
        }
        const newMentorsDetails = this.mentorDetailsRepository.create(createMontors)
        const savedMentorsDetails = await this.mentorDetailsRepository.save(newMentorsDetails)

        user.Mentor_Details = savedMentorsDetails
        return this.userRepository.save(user)
    }
    async createProgrammes(id: number, createProgrammes: CrearteProgrammesDto) {
        const user = await this.userRepository.findOneBy({ id })
        if(!user) {
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND)
        }
        const newProgrammes = this.programmesRepository.create({
            user,
            ...createProgrammes,
        })

        return this.programmesRepository.save(newProgrammes)
    }

    async findUsers() {
        return this.userRepository.find({ relations: ['programmes', 'Mentor_Details'] })
    }

    async findMentorsUsers(){
        const { MENTOR } = Role
        let user = await this.userRepository.find({ relations: ['programmes', 'Mentor_Details'] })

        if(MENTOR) {
            user = user.filter(use => use.role === 'mentor')
        }
        
        return user
    }

    async findMentorManagerUsers() {
        const {MENTOR_MANAGER} = Role
        let user = await this.userRepository.find({ relations: ['programmes', 'Mentor_Details'] })

        if(MENTOR_MANAGER) {
            user = user.filter(use => use.role === 'mentor-manager')
        }

        return user

    }
}
