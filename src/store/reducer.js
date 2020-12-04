import {CHANGE_INPUT , ADD_ITEM , DELETE_ITEM , GET_LIST} from './actionTypes';
const defaultState={
    inputValue:'write something',
    list:[ ]
}

export default(state=defaultState,action)=>{
    console.log(state,action)
    //reducer只能接受state，不能改变state
    if(action.type===CHANGE_INPUT){
        let newState= JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===ADD_ITEM){
        let newState= JSON.parse(JSON.stringify(state));//深度拷贝
        newState.list.push(newState.inputValue);
        newState.inputValue='';//文本框设为空
        return newState;
    }
    if(action.type===DELETE_ITEM){
        let newState= JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type === GET_LIST ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list = action.data //复制性的List数组进去
        return newState
    }
   return state
}
