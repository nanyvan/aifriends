import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user',()=>{
    const id = ref(1)
    const username = ref('xyn')
    const photo = ref('http://127.0.0.1:8000/media/user/photos/default.png')
    const profile = ref('111')
    const accessToken = ref('111')


    function isLogin(){
        return !!accessToken.value // 一定要带value!!!
    }
    function setAccessToken(){
        accessToken.value = token
    }
    function setUserInfo(data){
        id.value = data.user_id
        username.value = data.username
        photo.value = data.photo
        profile.value = data.profile
    }
    function logout(){
        id.value = 0
        username.value = ''
        photo.value = ''
        profile.value = ''
        accessToken.value = ''

    }

    return {
        id,
        username,
        photo,
        profile,
        accessToken,//千万不要忘了accessToken!!
        isLogin,
        setAccessToken,
        setUserInfo,
        logout,




    }
})