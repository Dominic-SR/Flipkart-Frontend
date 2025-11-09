import { AxiosInstance } from "./AxiosInstance";

const Requests = () => {
    const addRequest = async (path,payload,method) =>{    
        let result = await  AxiosInstance(method).post(path,payload).then((res)=>{
            if(res?.status === 200 && res.data.status){
              return res;
            }else{
              return res
            }
        }).catch((err) => { return err })
            return result
    }

    const updateRequest = async (path,Id,payload,method) =>{    
        let result = await  AxiosInstance(method).put(`${path}/${Id}`,payload).then((res)=>{
            if(res?.status === 200 && res.data.status){
              return res;
            }else{
                console.log("Error",res);
            }
        }).catch((err) => { return err })
            return result
    }

    const getAllRequest = async (path) =>{    

    let result = await  AxiosInstance().get(path).then((res)=>{
        if(res?.status === 200 && res.data.status){
           return res;
        }else{
            console.log("Error",res);
        }
    }).catch((err) => { return err })
        return result
    }   

    const getRequestByID = async (path,Id) =>{    
        let result = await  AxiosInstance().get(`${path}/${Id}`).then((res)=>{
            if(res?.status === 200 && res.data.status){
              return res;
            }else{
                console.log("Error",res);
            }
        }).catch((err) => { return err })
        return result
    }

    const deletedRequestByID = async (path,Id) =>{    
        let result = await  AxiosInstance().delete(`${path}/${Id}`).then((res)=>{
            if(res?.status === 200 && res.data.status){
              return res;
            }else{
                console.log("Error",res);
            }
        }).catch((err) => { return err })
        return result
    }


return { addRequest, updateRequest, getAllRequest, getRequestByID, deletedRequestByID }  
}

export default Requests 