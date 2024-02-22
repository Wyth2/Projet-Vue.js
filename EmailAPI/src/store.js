// store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      emails: [], // Initial empty list
      maxEmailsToShow: 10, // Set the default number of emails to display
    };
  },
  mutations: {
    addEmail(state, email) {
      state.emails.push(email);
    },
    deleteEmail(state, index) {
      state.emails.splice(index, 1);
    },
    updateMaxEmails(state, maxEmails) {
      state.maxEmailsToShow = maxEmails;
    },
  },
  actions: {
    addEmail({ commit }, email) {
      commit('addEmail', email);
    },
    deleteEmail({ commit }, index) {
      commit('deleteEmail', index);
    },
    setMaxEmails({ commit }, maxEmails) {
      commit('updateMaxEmails', maxEmails);
    },
  },
  getters: {
    getEmails: (state) => state.emails.slice(0, state.maxEmailsToShow),
  },
});

export default store;
