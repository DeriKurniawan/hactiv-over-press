<template>
  <div class="hello">
    <div>
      <div class="ui huge top secondary pointing fixed menu" id="top-menu">
        <router-link to="/" class="item" style="padding-left: 80px;">
          <img src="" alt="">
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbspHacktiv<b>WowPress</b>
        </router-link>
        <router-link to="/" active-class="active" class="item" exact>
          Home
        </router-link>
        <router-link to="/users" active-class="active" class="item" exact>
          Your Articles
        </router-link>
        <div class="right menu" style="padding-right: 70px;">
          <div class="item">
            <div class="ui action input">
              <input type="text" placeholder="Type here.. " style="width: 280px;">
              <div class="ui button">Search</div>
            </div>
          </div>
          <router-link to="/signin" active-class="active" class="item" exact v-if="!isLogin">
            Login
          </router-link>
          <a class="item">
            Sign Out
          </a>
        </div>
      </div>
    </div>
    <!--<router-view></router-view>-->
    <div class="ui fluid container" style="padding-top: 40px;">
          <div class="ui inverted vertical footer segment" style="height: 230px; padding-top: 50px;">
              <div class="ui container">
                  <div class="ui stackable inverted divided equal height stackable grid">
                      <div class="three wide column">
                          <h4 class="ui inverted header">About</h4>
                          <div class="ui inverted link list">
                            <a href="#" class="item">Sitemap</a>
                            <a href="#" class="item">Contact Us</a>
                            <a href="#" class="item">Religious Ceremonies</a>
                            <a href="#" class="item">Gazebo Plans</a>
                          </div>
                      </div>
                      <div class="three wide column">
                          <h4 class="ui inverted header">Services</h4>
                          <div class="ui inverted link list">
                            <a href="#" class="item">Banana Pre-Order</a>
                            <a href="#" class="item">DNA FAQ</a>
                            <a href="#" class="item">How To Access</a>
                            <a href="#" class="item">Favorite X-Men</a>
                          </div>
                      </div>
                      <div class="seven wide column">
                          <h4 class="ui inverted header">Footer Header</h4>
                          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui.fixed.menu {
    background-color: rgba(255, 255, 255, 0.88);
    border-top-width: 20px 0px 0px 0px;
    border-top-style: solid;
    border-top-color: orange;
  }
</style>
