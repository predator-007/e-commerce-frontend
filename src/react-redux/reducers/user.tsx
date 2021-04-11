export const userreducer=(state:string="not logged in",action:{type:string,payload:string})=>{
    if(action.type==="user")
    {
        return action.payload;
    }
    return state;

}