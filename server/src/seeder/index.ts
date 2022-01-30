 import { seedMongoWithUsers } from "./mockUser"

 export const startSeed = async (size: number) => {
        try{
         await seedMongoWithUsers(size)
        }
        catch(err){
            console.error(err)
        }
 }
