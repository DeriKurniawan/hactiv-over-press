import Vue from'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex, axios);

const Store = new Vuex.Store({
    state: {
        user: {
            id: null,
            name: '',
            email: '',
            token: ''
        },
        isLogin: false
    },
    getters: {
        getUserData (state) {
            return state.user;
        }
    },
    mutations: {
        setDeleteUserData (state) {
            return state.user = {
                id: null,
                name: '',
                email: '',
                token: ''
            }
        },
        setSigninInfo (state) {
            return state.isLogin = true;
        }
    },
    actions: {
        userSignupMethod ({commit}, userSignup) {
            axios.post('http://localhost:3000/api/user/signup/', {
                name: userSignup.name,
                username: userSignup.username,
                password: userSignup.password,
                email: userSignup.email,
                avatar: userSignup.avatar
            })
            .then((response)=>{
                alert('Terima kasih, ' + response.data.data.fullname + ', Silahkan Login menggunakan username anda!');
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        userSigninMethod ({commit}, userSignin) {
            axios.post('http://localhost:3000/api/user/signin/', {
                username: userSignin.username,
                password: userSignin.password
            })
            .then((response)=>{
                alert(response.data.message);
                console.log(response.data);
                //set local storage
                if(response.data.message !== 'Username yang anda masukkan belum terdaftar'){
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('_id', response.data.id);
                    commit('setSigninInfo')
                }
            })
        },
        userSignoutMethod ({commit}, userSignout) {
            localStorage.removeItem('token');
            localStorage.removeItem('_id');
            commit('setDeleteUserData');
            if(!localStorage.token) alert('Terimaksih sudah mengunjungi Hactiv wordpress');
        },
        checkTokenFromLocalStorageMethod ({ commit }) {
            if(localStorage.token) commit('setSigninInfo');
        }
    }
})

export default Store;