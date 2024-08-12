import axios from "axios"




// Auth token
export const getAuthToken = () =>{
    return window.localStorage.getItem('jwt')
}

export const setAuthToken = (token) =>{
    return window.localStorage.setItem("jwt", token )
}

//Get Request
export const getRequest = (method , url , data )=>{
     let headers ={}

     if(getAuthToken !== null && getAuthToken !== 'null') {
        headers = {"Authorization" : `Bearer ${getAuthToken()}`}
     }

     return axios({
        method : method,
        headers : headers,
        url : url,
        data : data
     })


}

export const postRequest = (method ,url , data)=>{

    return axios(
        {
            method : method,
            url : url,
            data : data
        }
    )
}

export const setProfileData= (data) =>{
    return window.localStorage.setItem("profileData",JSON.stringify(data))
}


export const getProfileData = () =>{
    return window.localStorage.getItem("profileData")
}

export const localGetAuth = ()=> {
    return window.localStorage.getItem("localCart")
}
export const localCartRequest = (method , url , data) =>{
    let headers = {}

    if(localGetAuth !== null && localGetAuth !== 'null') {
        headers = {"Authorization" : `Bearer ${localGetAuth()}`}
    }

    return axios({
        method : method,
        headers : headers,
        url : url,
        data : data
     })
}