<!-- EmailDetails.vue -->
<template>
  <div>
    <h2>Email Details</h2>
    <p><strong>Subject:</strong> {{ email.subject }}</p>
    <p><strong>Sender:</strong> {{ email.sender }}</p>
    <p><strong>Body:</strong> {{ email.body }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      // Utilisez le paramètre de route pour obtenir l'email spécifique à afficher
      const emailId = this.$route.params.id;
      return this.$store.getters.getEmailById(emailId);
    },
  },
};
</script>
