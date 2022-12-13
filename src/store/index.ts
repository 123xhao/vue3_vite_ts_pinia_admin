import { defineStore } from "pinia";

const useStore=defineStore('storeId',{
    state:()=>{
        return{
            menuFold:false
        }
    }
})

export default useStore