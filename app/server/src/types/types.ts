
import { Field, ObjectType,} from "type-graphql";
import {User} from '../entities/user.entity'
import { Request,Response } from "express";


export type MyContext={
  res:Response;
  req:Request ;
  payload?: { userId: string };
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




