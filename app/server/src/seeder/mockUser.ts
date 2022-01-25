import faker from "faker";
import { UserModel } from "../entities/user.entity";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import {EUCountrties} from "../utils/euCountries.enum";
import {randomEnum} from "../utils/randomEnum"


export const seedMongoWithUsers=async(howmuch:number)=>{
    
   
    for(let i=0; i<howmuch;i+=1){
        const hashPassword = await bcrypt.hash('qwerty1Q', 8);
        const _id = new ObjectId();
        const firstname: string= faker.name.firstName();
        const lastname: string =faker.name.lastName();
        const location: string =randomEnum(EUCountrties);
        let user = new UserModel({
            _id,
            user_id: _id,
            firstname:firstname,
            lastname:lastname,
            email: faker.internet.email(firstname,lastname),
            password: hashPassword,
            location:location
          });
          try{
             await user.save();
            }
            catch(err){
                console.log(err);
            }       
    }
    console.log(`🌱database seeded whit ${howmuch} new users🌱 `)
   
}

