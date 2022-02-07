import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";
import {MessageChat} from "../types/types"

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

  @Field(()=>[MessageChat])
  @prop()
  messages: MessageChat[]
  
}
export const ChatModel = getModelForClass(Chat, {
  schemaOptions: { timestamps: true },
});