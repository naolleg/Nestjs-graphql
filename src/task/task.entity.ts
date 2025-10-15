import { Field,ObjectType } from "@nestjs/graphql";

  @ObjectType()
export class Task {
    @Field(type => Number)
    id: number;
    @Field()
    title: string;
    @Field()
    description: string;
    @Field()
    status: 'pending' | 'in-progress' | 'completed';
}