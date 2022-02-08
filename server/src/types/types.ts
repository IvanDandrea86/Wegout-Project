import {  prop } from "@typegoose/typegoose";
import { Field, ObjectType} from "type-graphql";
import {User} from '../entities/user.entity'
import {Chat}from '../entities/chat.entity'
import { Request,Response } from "express";
import { Redis } from "ioredis";


export type MyContext={
  res:Response
  req:Request
  redis:Redis 

}
@ObjectType() 
export class UserInfo {

    @Field(()=>Number,{ defaultValue: 0 })
    @prop( { default: 0 })
    age :number;

    @Field(()=>[String])
    @prop({type:[String]})
    interest :string[];

    @Field(() => String)
    @prop(String)
    job :string;
    @Field(() => String)
    @prop(String)
    bio :string;
    }

@ObjectType()
export class FieldError {
  @Field(() => String)
  field: string;
  @Field(() => String)
  message: string;
  constructor(field:string,message:string){
    this.field=field;
    this.message=message;
  }
}
@ObjectType()
export class UserResponse {
  @Field(() => FieldError, { nullable: true })
  errors?: FieldError;
  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
export class ChatResponse {
  @Field(() => FieldError, { nullable: true })
  errors?: FieldError;
  @Field(() => Chat, { nullable: true })
  chat?: Chat;
}







