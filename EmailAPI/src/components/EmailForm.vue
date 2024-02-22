<!-- EmailForm.vue -->
<template>
  <div>
    <input v-model="newEmail" placeholder="Enter email" />
    <button @click="addEmail">Add Email</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newEmail: '',
    };
  },
  methods: {
    addEmail() {
      if (this.newEmail.trim() !== '') {
        this.$store.dispatch('addEmail', this.newEmail.trim());
        this.newEmail = '';
      }
    },
  },
};
</script>
