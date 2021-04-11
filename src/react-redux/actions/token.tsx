export const tokenaction:(res:string)=>{type:string,payload:string}=(res)=>{

    return{
        type:"token",
        payload:res,
    }
}