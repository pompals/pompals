import Vue from 'vue';
import Vuex from 'vuex';
import Peer from 'peerjs';

Vue.use(Vuex);

export const types = {
  // getters
  GET_PEER_ID: 'GET_PEER_ID',

  // mutations
  MUTATION_SET_PEER_ID: 'MUTATION_SET_PEER_ID',
  MUTATION_SET_PEER_CLIENT: 'MUTATION_SET_PEER_CLIENT',

  // actions
  FETCH_PEER_ID: 'FETCH_PEER_ID',
  CONNECT_TO_PEER: 'CONNECT_TO_PEER'
};

export default new Vuex.Store({
  state: {
    peerId: '',
    client: {}
  },
  getters: {
    [types.GET_PEER_ID]: state => state.peerId
  },
  mutations: {
    [types.MUTATION_SET_PEER_ID](state, peerId) {
      state.peerId = peerId;
    },
    [types.MUTATION_SET_PEER_CLIENT](state, client) {
      state.client = client;
    }
  },
  actions: {
    [types.FETCH_PEER_ID]({ commit }) {
      const peer = new Peer({ debug: 3 });
      peer.on('open', (id) => {
        commit(types.MUTATION_SET_PEER_ID, id);
        commit(types.MUTATION_SET_PEER_CLIENT, peer);
      });
    },
    [types.CONNECT_TO_PEER]({ state }, peerId) {
      const conn = state.client.connect(peerId);
      conn.on('open', () => {
        // Receive messages
        conn.on('data', function(data) {
          console.log('Received', data);
        });

        // Send messages
        conn.send('Hello!');
      });
    }
  },
  modules: {}
});
