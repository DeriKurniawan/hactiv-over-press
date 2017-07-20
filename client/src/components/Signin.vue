<template lang="html">
    <div style="padding-top: 90px; padding-bottom: 40px;">
        <div class="ui container">
            <div class="ui segment" id="form-login">
                <h1 class="ui header">USER READY</h1>
                <form class="ui huge form" style="padding-left: 60px; padding-right: 60px; padding-top: 40px; padding-bottom: 40px;">
                    <div class="field">
                        <label>Username: </label>
                        <input type="text" placeholder="Masukkan Username.." v-model="userSignin.username">
                    </div>
                    <div class="field">
                        <label>Password: </label>
                        <input type="password" placeholder="Masukkan password.." v-model="userSignin.password">
                    </div>
                    <button class="ui huge olive button" @click="submitUserSignin">Log In</button>
                </form>
            </div>
        </div>
        <div class="ui text container">
            <br /><br /><br />
            <h4 class="ui horizontal divider header"><i class="address card icon"></i>OR</h4>
            <br /><br /><br />
        </div>
        <div class="ui container">
            <div class="ui blue inverted segment">
            <h1 class="ui header">USER REGISTER</h1>
                <form class="ui huge inverted form" style="padding-left: 60px; padding-right: 60px; padding-top: 40px; padding-bottom: 40px;">
                    <div class="field">
                        <label>Name: </label>
                        <input type="text" placeholder="Masukkan nama lengkap.." v-model="userSignup.fullname">
                    </div>
                    <div class="field">
                        <label>Email: </label>
                        <input type="email" placeholder="Masukkan email valid.." v-model="userSignup.email">
                    </div>
                    <div class="field">
                        <label>Username: </label>
                        <input type="text" placeholder="Masukkan Username.." v-model="userSignup.username">
                    </div>
                    <div class="field">
                        <label>Password: </label>
                        <input type="password" placeholder="Masukkan password.." v-model="userSignup.password">
                    </div>
                    <button class="ui huge orange button" @click="submitUserSignup">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'signin',
    data () {
        return {
            userSignin: {
                username: '',
                password: ''
            },
            userSignup: {
                fullname: '',
                email: '',
                username: '',
                password: '',
                address: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'userSigninMethod',
            'userSignupMethod'
        ]),
        submitUserSignin () {
            console.log('userSignin----', this.userSignin);
            this.userSigninMethod(this.userSignin);
            this.$router.push('/');
            this.userSignup = {
                fullname: '',
                email: '',
                username: '',
                password: '',
                address: ''
            }
        },
        submitUserSignup () {
            console.log('userSignup----', this.userSignup);
            this.userSignupMethod(this.userSignup);
        }
    }
}
</script>

<style scoped>

</style>