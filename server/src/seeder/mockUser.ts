import faker from "faker";
import { UserModel } from "../entities/user.entity";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import { EUCountrties } from "../utils/euCountries.enum";
import { randomEnum } from "../utils/randomEnum";
import { EventList } from "../utils/getRandomEvent";





export const seedMongoWithUsers = async (howmuch: number) => {
  const listEvent= await EventList()
  for (let i = 0; i < howmuch; i += 1) {
    const hashPassword = await bcrypt.hash("qwerty1Q", 8);
    const _id = new ObjectId();
    const eventList= new Array<string>()
    for (let index = 0; index < 10; index++) {
      let randomIndex= Math.floor(Math.random() * 99);
      eventList.push(listEvent[randomIndex])
    }
    const firstname: string = faker.name.firstName();
    const lastname: string = faker.name.lastName();
    const location: string = randomEnum(EUCountrties);
    const age: number = Math.floor(Math.random() * (75 - 18) + 18);
    const bio: string = faker.hacker.phrase();
    const job: string = faker.name.jobTitle();
    const interest=new Array() 
    interest.push(faker.music.genre(),faker.music.genre())
    let user = new UserModel({
      _id,
      user_id: _id,
      firstname: firstname,
      lastname: lastname,
      email: faker.internet.email(firstname, lastname),
      password: hashPassword,
      location: location,
      eventList:eventList,
      info: {
        bio: bio,
        job: job,
        age: age,
        interest: interest,
      },
    });
    try {
      await user.save();
    } catch (err) {
      console.log(err);
    }
  }
  console.log(`🌱database seeded whit ${howmuch} new users🌱 `);
};
