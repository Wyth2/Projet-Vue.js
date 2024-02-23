<!-- EmailList.vue -->
<template>
  <div>
    <h1>Email List</h1>
    
    <!-- Form to specify the number of emails to display -->
    <label for="maxEmails">Number of Emails to Display:</label>
    <input type="number" id="maxEmails" v-model="maxEmails" @input="updateMaxEmails" />

    <!-- Form to send a new email -->
    <div>
      <label for="to">To:</label>
      <input type="text" id="to" v-model="newEmail.to" />

      <label for="subject">Subject:</label>
      <input type="text" id="subject" v-model="newEmail.subject" />

      <label for="body">Body:</label>
      <textarea id="body" v-model="newEmail.body"></textarea>

      <button @click="sendEmail">Send Email</button>
    </div>

    <!-- Search component -->
    <email-search @search="handleSearch"></email-search>

    <!-- List of emails -->
    <ul>
      <li v-for="email in displayedEmails" :key="email.id">
        <router-link :to="{ name: 'email-detail', params: { id: email.id } }">
          {{ email.subject }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import EmailSearch from './EmailSearch.vue';

export default {
  components: {
    EmailSearch,
  },
  data() {
    return {
      newEmail: {
        to: '',
        subject: '',
        body: '',
      },
      maxEmails: 10, // Default number of emails to display
      searchCriteria: {
        searchSender: '',
        searchKeyword: '',
        searchDateTime: '',
      },
    };
  },
  methods: {
    sendEmail() {
      // Add logic to send the email to the Vuex store
      this.$store.dispatch('addEmail', this.newEmail);
      // Reset the form after sending
      this.newEmail = { to: '', subject: '', body: '' };
    },
    updateMaxEmails() {
      // Update the maximum number of emails to display
      this.$store.dispatch('updateMaxEmails', this.maxEmails);
    },
    handleSearch() {
      // Dispatch a Vuex action to handle the search
      this.$store.dispatch('searchEmails', this.searchCriteria);
    },
  },
  computed: {
    displayedEmails() {
      // Use the getter to get the list of emails based on the specified maximum
      return this.$store.getters.getFilteredEmails(this.searchCriteria);
    },
  },
};
</script>

<style scoped>
/* Add your specific styles here */

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-top: 10px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

router-link {
  color: #yellow;
  text-decoration: none;
  transition: color 0.3s ease;
}

router-link:hover {
  color: #red;
}
</style>
