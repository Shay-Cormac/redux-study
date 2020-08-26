import * as React from 'react'
import TodoUI from './TodoUI' // 将UI组件引入
import {store} from '../store'



import {changeValueAction,addValueAction,deleteAction} from '../store/actions'

class Todo extends React.Component {
    [name:string]: any
    // 在 constructor 中实时监听 store.subscribe
    constructor(props: any) {
        super(props)
        // console.log(store.getState());
        //subscribe当store中数据发生变化就会更新数据
        store.subscribe(()=>{
            this.setState(store.getState())
        })
    }
    public state = { }

    public changeValue = (e: any) => {
        let value = e.target.value
        const action = changeValueAction(value)
        store.dispatch(action)
    }

    public addValue = () => {
       const action = addValueAction()
       store.dispatch(action)
    }

    public deleteItem = (value: any) => {
        const action = deleteAction(value)
        store.dispatch(action)
    }

    render() {
        let {list , inputValue} = store.getState()
        // 渲染UI组件，将UI组件需要的值传递过去
        return (
            <TodoUI 
                changeValue={this.changeValue}
                addValue={this.addValue}
                deleteItem={this.deleteItem}
                inputValue={inputValue}
                list={list}
                // onRef = {(ref: any)=>{this.child = ref}}
            />
        )
    }
}

export default Todo
