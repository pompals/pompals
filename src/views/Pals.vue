<template>
  <div class="about">
    <h1>here we pals</h1>
    <p>your peer id: {{ peerId }}</p>
    <p>-----</p>
    <p>connect to:</p>
    <input v-model="connectTo" placeholder="peer id" />
    <button v-on:click="connectToPeer(connectTo)">connect to pal</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { types } from '../store';

export default {
  name: 'Pals',
  data() {
    return {
      connectTo: ''
    };
  },
  computed: {
    ...mapGetters({
      peerId: types.GET_PEER_ID
    })
  },
  methods: {
    ...mapActions({
      connectToPeer: types.CONNECT_TO_PEER
    })
  }
};
</script>
