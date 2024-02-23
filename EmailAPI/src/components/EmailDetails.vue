<!-- EmailDetails.vue -->
<template>
  <div>
    <h2>Email Details</h2>
    <template v-if="email">
      <p><strong>To:</strong> {{ email.to }}</p>
      <p><strong>Subject:</strong> {{ email.subject }}</p>
      <p><strong>Body:</strong> {{ email.body }}</p>
    </template>
    <template v-else>
      <p>Email not found</p>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      const emailId = this.$route.params.id;
      return this.$store.getters.getEmailById(emailId);
    },
  },
};
</script>
