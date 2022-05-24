<template>
  <div class="ui secondary pointing menu">
    <router-link to="'/" class="active item">Image Storage</router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <!--    <a> GOES TO URL and reloads the entire page   
        !!! router-link   just changes url and components   !!!   -->
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Log Out</a>
      </div>
      <a v-else class="ui item" @click="login"> Log In </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedIn']),
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
