import {IDetails} from "../Types/types"

export const qualityImgage=(details:IDetails)=> {
    if(details !==undefined){
    const result = details?.images.filter(img=> img.ratio==="16_9" )
    const link= result?.filter(img=> img.width >= 2048)
    const uri=link[0].url
    return  uri
    }
}