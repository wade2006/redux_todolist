import React from 'react';
import { Input, Button, List } from 'antd';


//无状态组件
const TodolistUI = (props) => {
    return (<div className="todolist-container">
        <div>
            <h1>Redux_TodoList</h1>
            <div>
                <Input placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.inputChangeValue}
                    value={props.inputValue}
                ></Input>
                <Button type="primary" onClick={props.clickBtn}>增加</Button>

            </div>
            <div style={{ marginTop: "10px", width: '325px', textAlign: "center" }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => { props.deleteItem(index) }}>
                            {item}
                        </List.Item>
                    )}
                >
                </List>
            </div>
        </div>
    </div>)

}
// class TodolistUI extends Component {

//     render() {
//         return (
//             <div style={{ margin: "10px" }}>
//                 <div>
//                     <Input placeholder={this.props.inputValue} style={{ width: '250px', marginRight: '10px' }}
//                            onChange={this.props.inputChangeValue}
//                            value={this.props.inputValue}
//                     ></Input>
//                     <Button type="primary" onClick={this.props.clickBtn}>增加</Button>

//                 </div>
//                 <div style={{ margin: "10px", width: '300px' }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (
//                             <List.Item onClick={() => { this.props.deleteItem(index) }}>
//                                 {item}
//                             </List.Item>
//                         )}
//                     >

//                     </List>
//                 </div>
//             </div>
//         );
//     }
// }

export default TodolistUI;