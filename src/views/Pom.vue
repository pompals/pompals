<template>
  <div class="pom">
    <h1>here we pom</h1>
    <button v-on:click="newPeer">peer</button>
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
import Peer from 'peerjs';

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
    newPeer() {
      const peer = new Peer();
      peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);
        var conn = peer.connect('peer');
        conn.on('open', function() {
          console.log('open');
          // Receive messages
          conn.on('data', function(data) {
            console.log('Received', data);
          });

          // Send messages
          conn.send('Hello!');
        });
      });
    },
    addPal() {
      // save pals to localStorage
    },
    set() {
      localStorage.setItem('username', this.username);
    }
  }
};
</script>
