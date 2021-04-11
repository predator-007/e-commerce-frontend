export const tokenreducer:(state:string,action:{type:string,payload:string})=>{}=(state="",action)=>{
    
        if(action.type=="token")
            return action.payload;
        return state;

}