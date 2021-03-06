import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Chat {
  @Field()
  @prop()
  _id!: string;

  @Field()
  @prop()
  createdAt: Date = new Date();

  @Field()
  @prop()
  updatedAt: Date = new Date();

  @Field(()=>[String])
  @prop({type:[String]})
  users!: string[]
  
  @Field(()=>String)
  @prop({type:String})
  lastMessage: string;
  
}
export const ChatModel = getModelForClass(Chat, {
  schemaOptions: { timestamps: true },
});