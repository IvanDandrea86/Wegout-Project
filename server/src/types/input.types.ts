import { prop } from "@typegoose/typegoose";
import { Field, InputType} from "type-graphql";
@InputType()
export class UserInfoInput {

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
  constructor(age:number,interest:Array<string>,job:string,bio:string){
    this.age=age;
    this.interest=interest;
    this.job=job;
    this.bio=bio;
  }
  }

  