import { defineStore } from "pinia";

const useStore=defineStore('storeId',{
    state:()=>{
        return{
            menuFold:false,
            checkMenu:'/homepage',
            tagMenuList:[
                { name: '首页', type: '',closable:false,path:'/homepage' },
            ]
        }
    }
})

export default useStore