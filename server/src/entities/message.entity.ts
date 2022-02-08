import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";





@ObjectType()
export class Message {
  @Field()
  @prop()
  _id!: string;

  @Field()
  @prop()
  createdAt: Date = new Date();

  @Field()
  @prop()
  body: string;

  @Field(()=>String)
  @prop()
  sender: string;

@Field(()=>String)
  @prop({type:String})
  chat: string;
  





  
}
export const MessageModel = getModelForClass(Message, {
  schemaOptions: { timestamps: true },
});