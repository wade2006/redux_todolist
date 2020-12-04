import {takeEvery,put} from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import axios from 'axios'
import  {getListAction} from './actionCreators'
//generator
function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList)
}
function* getList(){
    const res =yield axios.get('https://www.easy-mock.com/mock/5eed7d6a4d226b23f958e146/reactdemo01/todolist')
    const action =getListAction(res.data)
    yield put(action)
}
export default mySaga