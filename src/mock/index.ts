import Mock from 'mockjs'

Mock.setup({
    timeout:'200-600'
})

Mock.mock('/user/login','post',(params:any)=>{
    return{
        data:{token:'123'},
        status:200,
        message:'success'
    }
})