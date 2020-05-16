import Peer from 'peerjs';

const types = {
  // getters
  // mutations
  MUTATION_SET_PEER_ID: 'MUTATION_SET_PEER_ID',
  MUTATION_SET_PEER_CLIENT: 'MUTATION_SET_PEER_CLIENT',
  // actions
  FETCH_PEER_ID: 'FETCH_PEER_ID',
  CONNECT_TO_PEER: 'CONNECT_TO_PEER'
};

const module = {
  state: {},
  getters: {},
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
  }
};

export default module;
