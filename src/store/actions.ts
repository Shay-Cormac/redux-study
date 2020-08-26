import {store} from './index'

// 使用大写注册常量方便调用
export const CHANGE_INPUT = 'changeInput'
export const ADD_VALUE = 'addValue'
export const DELETE = 'delete'

// 将 actionTypes 的常量引入，替代 action 中 type 属性的值，防止写错字符串报错

export const changeValueAction = (value: any) => ({
        type:CHANGE_INPUT,
        value: value
})

export const addValueAction = () => ({
        type:ADD_VALUE
})

export const deleteAction = (value: any) => ({
        type: DELETE,
        value: value
})