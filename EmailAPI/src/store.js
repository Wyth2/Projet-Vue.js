import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      emails: [], // Initial empty list
    };
  },
  mutations: {
    addEmail(state, email) {
      state.emails.push(email);
    },
    deleteEmail(state, index) {
      state.emails.splice(index, 1);
    },
  },
  actions: {
    addEmail({ commit }, email) {
      commit('addEmail', email);
    },
    deleteEmail({ commit }, index) {
      commit('deleteEmail', index);
    },
  },
  getters: {
    getEmails: (state) => state.emails,
  },
});

export default store;
