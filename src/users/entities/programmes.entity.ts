import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { MentorDetails } from "./mentors-details.entity"
import { User } from "./users.entity"

@Entity({ name: 'programmes' })
export class Programmes {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @ManyToOne(() => User, user => user.programmes)
    @JoinColumn({ name: "created_by" })
    user: User   //user_id
    
    @Column()
    status: string

    @Column()
    achieved_by: string 

    @Column()
    programme_picture: string

    @Column()
    tasks: string

    @Column({ nullable: true })
    date_created: Date

    @Column({ nullable: true })
    date_completed: Date

    @Column({ nullable: true })
    date_archived: Date

    @Column()
    criteria: string

    @Column()
    report: string

    @OneToOne(() => MentorDetails, mentorDetails => mentorDetails.program_of_interest)
    mentordetails: MentorDetails
}