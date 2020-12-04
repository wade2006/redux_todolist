import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {getTodoList,changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators';
import "./App.css"
import TodolistUI from './TodolistUI'
class Todolist extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState());
        this.state = store.getState();
        store.subscribe(this.storeChange);//订阅模式
    }
    inputChangeValue=(e)=>{
        //   console.log(e.target.value);
        const action= changeInputAction(e.target.value);
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState());
    }

    clickBtn=()=>{
        const action=addItemAction();
        store.dispatch(action);
    }
    deleteItem=(index)=>{
         const action=deleteItemAction(index);
         store.dispatch(action);
         
    }
    componentDidMount(){
       const action=getTodoList()//返回一个函数action
       console.log("action----"+action)
       store.dispatch(action)
    //    console.log(action);
       
    }
    render() {
        return (
            <TodolistUI inputValue={this.state.inputValue}
            inputChangeValue={this.inputChangeValue}
            clickBtn={this.clickBtn}
            list={this.state.list}
            deleteItem={this.deleteItem}
            ></TodolistUI>
        );
    }
}

export default Todolist;