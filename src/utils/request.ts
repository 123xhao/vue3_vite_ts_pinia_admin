import axios from 'axios'
import { ElMessage } from 'element-plus'

const instance=axios.create({
    baseURL:'',
    timeout:5000
})

instance.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any)=>{
    console.log(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
    (response: { data: any }) =>{
        const res=response.data
        if(res.status!==200){
            ElMessage({
                message:res.message||'Error',
                type:'error',
                duration:5*1000
            })
            return Promise.reject(new Error(res.message || 'Error'))
        }else{
            return res.data
        }
    },
    (error: any) =>{
        console.log('err'+error);
        ElMessage({
            message:error.message,
            type:'error',
            duration:5*1000
        })
        return Promise.reject(error)
    }
)

export default instance