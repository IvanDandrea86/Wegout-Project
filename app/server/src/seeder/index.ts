import { seedMongoWithUsers } from "./mockUser"


export const startSeed = async (size: number) => {

        await seedMongoWithUsers(size)

  
}
