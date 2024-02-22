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
  },
  getters: {
    getEmails: (state) => state.emails.slice(0, state.maxEmailsToShow),
    getFilteredEmails: (state) => (searchCriteria) => {
      const filteredEmails = state.emails.filter((email) => {
        const matchesSender = !searchCriteria.searchSender || email.sender.toLowerCase().includes(searchCriteria.searchSender.toLowerCase());
        const matchesKeyword = !searchCriteria.searchKeyword || email.subject.toLowerCase().includes(searchCriteria.searchKeyword.toLowerCase()) || email.body.toLowerCase().includes(searchCriteria.searchKeyword.toLowerCase());
        const matchesDateTime = !searchCriteria.searchDateTime || new Date(email.dateTime) >= new Date(searchCriteria.searchDateTime);

        return matchesSender && matchesKeyword && matchesDateTime;
      });
      
      return filteredEmails.slice(0, state.maxEmailsToShow);
    },
  },
});

export default store;
