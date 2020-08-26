import {CHANGE_INPUT,ADD_VALUE,DELETE} from './actions'
const defaultState = {
    inputValue:'',
    list:[
        '第一条',
        '第二条',
        '第三条',
    ]
}
export default (state = defaultState, action: any) => {
    console.log(state,action);
    
    if (action.type === CHANGE_INPUT) {
        // reducer 里只能接收 state， 不能改变 state
        // 使用深度拷贝，赋值新变量
        // let newState = JSON.parse(JSON.stringify(state)) 或
        let newState = {...state}
        newState.inputValue = action.value
        return newState
    }
    
    if (action.type === ADD_VALUE) {
        let newState = {...state}
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DELETE) {
        let newState = {...state}
        let index = newState.list.indexOf(action.value)
        newState.list.splice(index,1)
        return newState
    }
    return state
}