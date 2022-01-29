import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsOptional()
  @IsNotEmpty()
  age?: number;

  @Field()
  @IsNotEmpty()
  userId?: string;

  @Field({ nullable: true })
  @IsOptional()
  isSubscribed?: boolean;
}
