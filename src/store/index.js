import Vue from 'vue';
import Vuex from 'vuex';
import Peer from 'peerjs';

Vue.use(Vuex);

export const types = {
  // getters
  GET_PEER_ID: 'GET_PEER_ID',

  // mutations
  MUTATION_INIT_STORE: 'MUTATION_INIT_STORE',
  MUTATION_SET_PEER_ID: 'MUTATION_SET_PEER_ID',
  MUTATION_SET_PEER_CLIENT: 'MUTATION_SET_PEER_CLIENT',

  // actions
  FETCH_PEER_ID: 'FETCH_PEER_ID',
  CONNECT_TO_PEER: 'CONNECT_TO_PEER'
};

const store = new Vuex.Store({
  state: {
    peerId: '',
    client: {}
  },

  getters: {
    [types.GET_PEER_ID]: state => state.peerId
  },

  mutations: {
    [types.MUTATION_INIT_STORE](state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
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
      peer.on('open', id => {
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

// https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
