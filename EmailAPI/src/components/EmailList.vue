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
export default {
  data() {
    return {
      newEmail: {
        to: '',
        subject: '',
        body: '',
      },
      maxEmails: 10, // Default number of emails to display
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
      this.$store.dispatch('setMaxEmails', this.maxEmails);
    },
  },
  computed: {
    displayedEmails() {
      // Use the getter to get the list of emails based on the specified maximum
      return this.$store.getters.getEmails;
    },
  },
};
</script>

<style>
/* Add your styles if needed */
</style>
