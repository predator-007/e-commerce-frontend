
export const useraction :(res:string)=>{type:string,payload:string} =(res)=>{
    return {
        type:"user",
        payload:res,
    }
}