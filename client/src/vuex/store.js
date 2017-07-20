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
        isLogin: false,
        articles: []
    },
    getters: {
        getUserData (state) {
            return state.user;
        },
        getArticlesData (state) {
            return state.articles;
        },
        getLoginStatus (state) {
            return state.isLogin;
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
        },
        setUserData (state, userData) {
            return state.user = userData
        },
        setArticleData (state, articlesData) {
            return state.articles = articlesData
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
                    axios.get('http://localhost:3000/api/user/'+response.data.id)
                    .then((user)=>{
                        let userData = {
                            id: user.data._id,
                            name: user.data.name,
                            email: user.data,
                            token: response.data.token
                        }
                        commit('setDeleteUserData', userData)
                    })
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
        },
        apiAllArticleMethod ({commit}) {
            axios.get('http://localhost:3000/api/article/')
            .then((response)=>{
                let articles = response.data;
                commit('setArticlesData', articles);
            })
            .catch((err)=>{
                console.log(err);
                alert('Kesalahan di server database');
            })
        },
        apiCreateNewArticleMethod ({commit}, newArticles) {
            axios.post('http://localhost:3000/api/article/', {
                title: newArticles.title,
                content: newArticles.question,
                category: newArticles.category,
                author: localStorage._id
            }, {
                headers: { token: localStorage.token }
            })
            .then((response)=>{
                alert('Berhasil menambah article baru');
                axios.get('http://localhost:3000/api/article/')
                .then((articles)=>{
                    commit('setArticlesData', articles.data);
                })
                .catch((err)=>{
                    console.log(err);
                    alert('Kesalahan di server database');
                })
            })
            .catch((err)=>{
                alert('Tidak dapat melanjutkan Anda harus login terlebih dahulu!');
                console.log(err)
            })
        }
    }
})

export default Store;