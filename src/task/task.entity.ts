import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsAlpha } from 'class-validator';
import { User } from '../user/user.entity';

@ObjectType()
@Entity()
export class Task {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @IsAlpha()
  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({ type: 'enum', enum: ['pending', 'in-progress', 'completed'], default: 'pending' })
  status: 'pending' | 'in-progress' | 'completed';

  @ManyToOne(() => User, user => user.tasks, { onDelete: 'CASCADE' })
  user: User;
}
