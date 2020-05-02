<template>
  <div class="pom">
    <h1>here we pom</h1>
    <div v-if="!inSession">
      <input v-model="username" placeholder="username" />
      <p>username is: {{ username }}</p>
      <button v-on:click="startSession" v-if="!inSession">START</button>
    </div>
    <div v-if="inSession">
      <p>TIMER</p>
      <p>{{ totalTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pom',
  data() {
    return {
      username: localStorage.getItem('username') || '',
      inSession: false,
      totalTime: 25 * 60,
      timer: null,
      displayed: null
    };
  },
  methods: {
    startSession() {
      this.inSession = true;
      this.timer = setInterval(() => this.totalTime--, 1000);
      this.set();
    },
    set() {
      localStorage.setItem('username', this.username);
    }
  }
};
</script>
