import  mongoose  from "mongoose";

export const runConnection=async():Promise<void>=>{ 
    await mongoose.connect(process.env.ATLAS_CONNETCION,{})
    let startTime=new Date()

console.log(startTime,"\n📦 MongoDB Connected")        
}
