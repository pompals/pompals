<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Pom</router-link> |
      <router-link to="/pals">Pals</router-link> |
      <router-link to="/account">Account</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { types } from './store';

export default {
  methods: {
    ...mapActions({
      fetchPeerId: types.FETCH_PEER_ID
    })
  },
  mounted: function() {
    this.$store.commit('initialiseStore');
    this.fetchPeerId();
  }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
