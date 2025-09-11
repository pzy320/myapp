import {defineStore} from 'pinia'
 export const useCounterStore=defineStore('counter',{
     // 定义 state
    //  defineStore 函数接受三个参数：
    //  ID (string or symbol):
    //  每个 store 必须有一个唯一的 ID，用于标识该 store。
    //  示例： 'counter' 或 Symbol('counter')。
    //  Options (Object):
    //  包含定义 store 的所有配置选项，包括 state、getters 和 actions。
    state(){
        //state 是存储应用状态的地方。在 defineStore 中，state 是一个返回对象的函数，确保每次调用 useCounterStore 时都能获得一个新的状态实例。
        return{
            num:1
        }
    },
     // 定义 getters
    getters:{
        doubleCount: (state) => state.num * 2,
    },
     // 定义 actions
 
    actions:{
        increment(){
            this.num++
        },
        decrement() {
            this.num--;
          },
        resets() {
            this.num=1;
          },
      
    }
 })
