import { defineStore } from "pinia";

const useStore=defineStore('storeId',{
    state:()=>{
        return{
            count:0
        }
    }
})

export default useStore