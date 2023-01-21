
const initialState=0;

const ChangeNumber=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
            return state+1
        case "SUB":
            return state-1;
        default:
        return state;
    }

}
export default ChangeNumber;