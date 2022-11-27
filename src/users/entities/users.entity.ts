import { ApiProperty, ApiQuery } from '@nestjs/swagger'
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { MentorDetails } from './mentors-details.entity'
import { Programmes } from './programmes.entity'
import { Role } from './role.enum'

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @ApiProperty({
        example: 'Amani78'
    })
    username: string

    @Column()
    @ApiProperty({
        example: 'amani78@test.com'
    })
    email: string

    @Column({nullable: true})
    @ApiProperty({
        example: '2022-11-26T22:07:00.000Z'
    })
    dateCreated: Date

    @Column({ type: 'enum', enum: Role, default: Role.MENTOR })
    @ApiProperty({
        enum: Role
    })
    role: Role

    @Column()
    @ApiProperty({
        example: 'amani78@123A'
    })
    password: string

    @Column()
    @ApiProperty({
        example: false
    })
    profile_completed: boolean = false;

    @Column()
    @ApiProperty({
        example: 'Egypt'
    })
    country: string

    @Column()
    @ApiProperty({
        example: 'Cairo'
    })
    city: string

    @Column()
    @ApiProperty({
        example: 'https://www.linkedin.com/in/amanii-sidkii-as96/'
    })
    social_profile: string

    @Column()
    @ApiProperty({
        example: 'https://www.linkedin.com'
    })
    website: string

    @Column()
    @ApiProperty({
        example: 'Backend developer (Python | GoLang ) | Cloud Engineer ☁️.'
    })
    bio: string

    @Column()
    @ApiProperty({
        example: 'Backend developer'
    })
    headline: string

    @OneToOne(() => MentorDetails, mentorDetails => mentorDetails.user)
    Mentor_Details: MentorDetails

    @OneToMany(() => Programmes, programmes => programmes.user)
    programmes: Programmes[]
}