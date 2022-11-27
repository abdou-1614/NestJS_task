import { User } from './users.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Programmes } from './programmes.entity';

@Entity({ name: 'Mentor_Details' })
export class MentorDetails {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User, user => user.Mentor_Details, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: User

    @Column({ nullable: true })
    manager_id: number

    @Column({ type: 'varchar', length: 200 })
    previous_role: string

    @Column({ type: 'varchar', length: 200 })
    previous_program: string

    @OneToMany(() => Programmes, programmes => programmes.mentordetails)
    @JoinColumn({ name: 'program_of_interest', referencedColumnName: 'id' })
    program_of_interest: number

    @Column()
    year_of_technical_experience: number

    @Column()
    document: string

    @Column()
    being_a_mentor_before: boolean = false

    @Column({ nullable: true })
    technical_proficiency: string

    @Column()
    status: boolean = false

    @Column()
    approved: string
}