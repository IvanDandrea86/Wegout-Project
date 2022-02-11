import { startSeed } from "./seeder";
import{ runConnection} from './loaders/dbLoader'
  //Seed with FakeData

  const run=async()=>{
    try{
    await runConnection()
    startSeed(60)
    }
    catch(err){
      console.error(err)
    }
  }
  run()
  