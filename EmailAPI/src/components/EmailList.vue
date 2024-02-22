<!-- EmailList.vue -->
<template>
  <div>
    <h1>Email List</h1>
    <ul>
      <li v-for="email in emails" :key="email.id">
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
      emails: [
        // Your list of emails
        { id: 1, subject: 'Example Subject 1', body: 'Email body 1', sender: 'Sender 1' },
        { id: 2, subject: 'Example Subject 2', body: 'Email body 2', sender: 'Sender 2' },
        // Add more emails as needed
      ],
    };
  },
};
</script>

<style>
/* Add your styles if needed */
</style>
