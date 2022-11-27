import { ApiProperty } from "@nestjs/swagger/dist"
import { Role } from "../entities/role.enum"


export class CreateUserDto {
    @ApiProperty({
        example: 'Amani78'
    })
    username: string

    @ApiProperty({
        example: 'amani78@test.com'
    })
    email: string

    @ApiProperty({
        enum: Role
    })
    role: Role

    @ApiProperty({
        example: 'amani78@123A'
    })
    password: string

    @ApiProperty({
        example: false
    })
    profile_completed: boolean = false;

    @ApiProperty({
        example: 'Egypt'
    })
    country: string

    @ApiProperty({
        example: 'Cairo'
    })
    city: string

    @ApiProperty({
        example: 'https://www.linkedin.com/in/amanii-sidkii-as96/'
    })
    social_profile: string

    @ApiProperty({
        example: 'https://www.linkedin.com'
    })
    website: string

    @ApiProperty({
        example: 'Backend developer (Python | GoLang ) | Cloud Engineer'
    })
    bio: string

    @ApiProperty({
        example: 'Backend developer'
    })
    headline: string
}