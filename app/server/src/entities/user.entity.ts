import { ObjectType, Field } from "type-graphql";
import {prop, getModelForClass} from "@typegoose/typegoose";



@ObjectType()
export class User{

    @Field()
    @prop()
     _id !: string;

    @Field()
    @prop()
     user_id : string;
    
    @Field()
    @prop()
    createdAt: Date =new Date;

    @Field()
    @prop()
    updatedAt: Date = new Date;

   
    @Field()
    @prop()
    password !:string;

    @Field()
    @prop({unique:true})
    email !:string;

    @Field({nullable:true})
    @prop()
    firstname !:string;

    @Field({nullable:true})
    @prop()
    lastname !:string;

    @Field(()=>[String])
    @prop({type:String})
    friendList :Array<String>;

    @Field(()=>[String])
    @prop({type:String})
    postList :Array<String>;

    @Field(()=>[String])
    @prop({type:String})
    messagesRecived
     :Array<String>;
     @Field(()=>[String])
     @prop({type:String})
     messagesSent
      :Array<String>;
 
    

    
}
export const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true } });
