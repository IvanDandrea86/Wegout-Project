import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";
import { UserInfo } from "../types/types";

@ObjectType()
export class User {
  @Field()
  @prop()
  _id!: string;

  @Field()
  @prop()
  user_id: string;

  @Field()
  @prop()
  createdAt: Date = new Date();

  @Field()
  @prop()
  updatedAt: Date = new Date();

  @Field()
  @prop()
  password!: string;

  @Field()
  @prop({ unique: true })
  email!: string;

  @Field()
  @prop()
  firstname!: string;

  @Field()
  @prop()
  lastname!: string;

  @Field()
  @prop()
  location!: string;

  @Field()
  @prop()
  info!: UserInfo;


  @Field(() => [String])
  @prop({ type: String })
  friendList: Array<String>;

  @Field(() => [String])
  @prop({ type: String })
  eventList: Array<String>;

  @Field({ nullable: true, defaultValue: false })
  @prop({ default: false })
  isAdmin: boolean;

  @Field({ nullable: true, defaultValue: false })
  @prop({ default: false })
  isActive: boolean;

  @Field({ nullable: true, defaultValue: false })
  @prop({ default: false })
  isVerified: boolean;

  @Field(() => [String])
  @prop({ type: String })
  messagesRecived: Array<String>;

  @Field(() => [String])
  @prop({ type: String })
  messagesSent: Array<String>;
}
export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
});
