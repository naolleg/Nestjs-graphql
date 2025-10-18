import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsAlpha } from 'class-validator';

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
}
