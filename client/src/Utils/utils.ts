export const  sleep=(ms:number)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  export const removeValue=(list:string,value:string,separator:string):string=>{
    separator = separator || ",";
    var values = list.split(separator);
    for(var i=0; i<values.length; i++) {
      if(values[i]===value) {
        values.splice(i, 1);
        return values.join(separator);
      }
    }
    return list;
  }