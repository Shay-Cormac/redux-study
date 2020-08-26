import * as React from 'react'
import { Row, Input, List } from 'antd'
import 'antd/dist/antd.css'


interface TodoUIProps {
    [name: string]: any
}


// class TodoUI extends React.Component<TodoUIProps> {

//     constructor(props: Readonly<TodoUIProps>) {
//         super(props)
//         this.state={}
//     }
//     render() {
//         // 编写UI组件并使用this.props获取业务逻辑父组件传递过来的值
//         return (
//             <div>
//                 <Row>
//                     <Input onChange={this.props.changeValue}  value={this.props.inputValue} onPressEnter={this.props.addValue} />
//                 </Row>
//                 <Row>
//                     <List
//                         header={<div>Header</div>}
//                         footer={<div>Footer</div>}
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item:any) => <List.Item onClick={()=>this.props.deleteItem(item)}>{item}</List.Item>}
//                     />
//                 </Row>
//             </div>
//         );
//     }
// }

// 在较大的项目中，使用无状态组件编写没有业务逻辑的UI组件，可提高性能（无state、无生命周期、没有业务逻辑只有UI）
    // 给无状态组件传递 props 使组件可以获取业务逻辑父组件传递过来的值
const TodoUI = (props: any) => {
    return (
        <div>
            <Row>
                <Input onChange={props.changeValue} value={props.inputValue} onPressEnter={props.addValue} />
            </Row>
            <Row>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={props.list}
                    renderItem={(item: any) => <List.Item onClick={() => props.deleteItem(item)}>{item}</List.Item>}
                />
            </Row>
        </div>
    )
}

export default TodoUI;