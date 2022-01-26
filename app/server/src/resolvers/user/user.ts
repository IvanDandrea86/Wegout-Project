import { Resolver, Arg,  Query, Mutation, Ctx } from "type-graphql";
import { Service } from "typedi";
import { User, UserModel } from "../../entities/user.entity";
import * as bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import { UserResponse, FieldError, MyContext } from "../../types/types";
import { COOKIENAME } from "../../constants/const";
import {v4} from 'uuid';
import sendMailTest from "../../mailer/sendMailTest";
import { sendMail } from "src/mailer/sendMail";

declare module 'express-session' {
       interface SessionData {
           userID: string;
      }
    }

@Service() // Dependencies injection
@Resolver(() => User )
export default class UserResolver {
  @Query(() => User ,{ name: "me",nullable:true })
  async me(@Ctx() {req}: MyContext) {
    if (!req.session.userID) {
      return null;
    }
    return UserModel.findOne({_id:req.session.userID});
  }
  
  @Query(() => User, { name: "findUserById" })
  async findUserById(@Arg("user_id") _id: string) {
    return await UserModel.findById({ _id: _id });
  }
 
  @Query(() => User , { name: "findUserByEmail" })
  async findUserByEmail(@Arg("email") email: string) {
    return await UserModel.findOne({ email: email });
  }

  @Query(() => [User], { name: "findAllUser" })
  async findAllUser() {
    return await UserModel.find({});
  }
  @Mutation(() => Boolean, { name: "deleateAllUser" })
  async deleteAllUser() {
    try {
      await UserModel.deleteMany({});
    } catch (err) {
      return false;
    }
    return true;
  }
  @Mutation(() => Boolean, { name: "deleteUser" })
  async deleteUser(@Arg("_id") id: string) {
    try {
      await UserModel.deleteOne({ _id: id }).exec();
      const document=await UserModel.find({})
      document.forEach(element => {
        if (element.friendList.includes(id)){
         element.friendList = element.friendList.filter(e=> e!==id);
        element.save();
        }
      });
    } catch (err) {
      console.error(err);
      return false;
    }
    return true;
  }

  @Mutation(() => UserResponse, { name: "createUser" })
  async createUser(
    @Arg("email") email: String,
    @Arg("password") password: string,
    @Arg("firstname") firstname: String,
    @Arg("lastname") lastname: String,
    @Arg("location") location:String,
    @Ctx() {req}:MyContext
     ): Promise<UserResponse> {
   if (
      !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    ) {
      const error = new FieldError(
        "password",
        "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
      );
      return {
        errors: error,
      };
    }

    const hashPassword = await bcrypt.hash(password, 8);
    const _id = new ObjectId();
    const user = new UserModel({
      _id,
      user_id: _id,
      email: email,
      password: hashPassword,
      firstname : firstname,
      lastname:lastname,
      location:location
    });
    try {
      await user.save();
    } catch (err) {
      console.error(err);
      if (err.code === 11000 && err.keyPattern.email == 1) {
        const error = new FieldError("email", "email already exist"); 
      return {
        errors: error
      };
    }
  }
  //Succes Case

    req.session.userID=user._id;

    return {user};
  }
  @Mutation(() => User, { name: "updateUser", nullable: true })
  async updateUser(
    @Arg("email") email: String ,
    @Arg("lastname") lastname: string,
    @Arg("firstname") firstname: string,
    @Arg("_id") id: string
  ): Promise<User | null> {
    await UserModel.findOneAndUpdate({ _id: id} ,{email: email,lastname:lastname,firstname:firstname }).exec();
    const user = await UserModel.findOne({ _id: id }).exec();
    return user;
  }

  @Mutation(() => Boolean, { name: "addFriend" })
  async addFriend(
    @Arg("user_id") user_id: string,
    @Arg("reciver_id") reciver_id: string
  ): Promise<boolean> {
    const user = await UserModel.findOne({ _id: user_id });
    const reciver = await UserModel.findOne({_id:reciver_id})
    if (!user || ! reciver) {
      return false;
    } 
      await UserModel.updateOne(
        { _id: user_id },
        { $push: { friendList: reciver_id } }
      );
      await UserModel.updateOne(
        { _id: reciver_id },
        { $push: { friendList: user_id } }
      );
      return true;
    }
  
  @Mutation(() => Boolean, { name: "removeFriend" })
  async removeFriend(
    @Arg("user_id") user_id: string,
    @Arg("reciver_id") reciver_id: string
  ) {
    const user = await UserModel.where({ _id: user_id });
    if (!user) {
      return false;
    } else {
      await UserModel.updateOne(
        { _id: user_id },
        { $pull: { friendList: reciver_id } }
      );
      await UserModel.updateOne(
        { _id: reciver_id },
        { $pull: { friendList: user_id } }
      );
      return true;
    }
  }
  @Mutation(() => UserResponse, { name: "login" })
  async login(
    @Arg("email") email: String,
    @Arg("password") password: string,
    @Ctx() {req}:MyContext
  ): Promise<UserResponse> {

    const userEmail = await UserModel.findOne({ email: email });

    if (!userEmail && email != null) {
      return {
        errors: 
          {
            field: "Email",
            message: "This email doesn't exist",
          },
        
      };
    }
    if (userEmail != null) {
      const validEmailPassword = await bcrypt.compare(
        password,
        userEmail!.password
      );
      if (!validEmailPassword) {
        return {
          errors: 
            {
              field: "Password",
              message: "wrong password",
            }   
        };
      } else {
        const user = userEmail.toObject();
        req.session.userID=user.user_id;
        return { user };
      }
    }
    return {};
  }

  @Mutation(() => Boolean,{ name: "logout" })
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIENAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
@Mutation(()=>Boolean,{ name: "forgotPassword" })
async forgotPassword(
  @Arg("email") email:string,
  @Ctx() {redis}:MyContext)
  :Promise<Boolean>
  {
    const user =await UserModel.findOne({email:email})
    if (!user) {return true}
    else{
    const token=v4()
    redis.set("ForgotPass"+token,
    user._id,
    "ex",
    1000*60*60)//1hour
    const HtmlLink=`<a href="http://localhost:3000/forgot/${token}">Here the link to reset yourt password</a> `
    // await sendMail(user.email,HtmlLink,"WeGOut Password Reset Request")
    try{
      await sendMailTest(user.email,HtmlLink,"WeGOut Password Reset Request")
    }
    catch(err){
      console.error(err)
    }
      return true
  }
  }

  @Mutation(()=>UserResponse|| Boolean,{ name: "changePassword" })
  async changePass(
    @Arg("password") password: string,
    @Arg("token") token:string,
    @Ctx() {req,redis}:MyContext)
  : Promise<UserResponse|Boolean> {
    try{
    const userId= await redis.get("ForgotPass"+token)
    if(!userId){
      return {
        errors:{
          field:'token',
          message:"Your token expired"
        }
      }
    }
    else{
      const hashPassword = await bcrypt.hash(password, 8)
     await UserModel.findOneAndUpdate({_id:userId},{password:hashPassword}).exec() 
     req.session.userID = userId
     redis.del("ForgotPass"+token)
    return true;
    }
    }
    catch(err){
      console.error(err)
    }
    return  {}
  }
}
