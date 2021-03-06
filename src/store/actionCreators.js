import { GET_MY_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM,

})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://rap2api.taobao.org/app/mock/259382/api/todolist')
        const data = res.data.data
        console.log(data);
        const action = getListAction(data)
        dispatch(action)
    }
}

