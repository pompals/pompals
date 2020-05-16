import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const types = {
  // getters
  GET_USER_ID: 'GET_USER_ID',

  // mutations
  MUTATION_INIT_STORE: 'MUTATION_INIT_STORE',
  MUTATION_ADD_POM_PAL: 'MUTATION_ADD_POM_PAL',

  // actions
  ADD_POM_PAL: 'ADD_POM_PAL'
};

const store = new Vuex.Store({
  state: {
    userId: 'dendog',
    accountId: '871623',
    pomPals: {}
  },

  getters: {
    [types.GET_USER_ID]: state => state.userId,
    [types.GET_POM_PALS]: state => state.pomPals
  },

  mutations: {
    [types.MUTATION_INIT_STORE](state) {
      const localStore = localStorage.getItem('store');
      if (localStore) {
        const { userId, pomPals } = JSON.parse(localStore);
        state.userId = userId;
        state.pomPals = pomPals;
      }
    },
    [types.MUTATION_ADD_POM_PAL](state, palId) {
      Vue.set(state.pomPals, palId, {});
      state.pomPals[palId] = {
        status: 0
      };
    }
  },

  actions: {
    [types.ADD_POM_PAL]({ commit }, palId) {
      commit(types.MUTATION_ADD_POM_PAL, palId);
    }
  },
  modules: {}
});

// https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store
// this is an awful way of doing things, writing to LS on each update.
// TODO: refactor...
store.subscribe((mutation, state) => {
  const { userId, pomPals } = state;
  localStorage.setItem('store', JSON.stringify({ userId, pomPals }));
});

export default store;
