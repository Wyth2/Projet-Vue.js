<template>
  <div>
    <h1>Welcome to the Email manager!</h1>
    <SigninComponent @update-user="updateUser" />
  </div>
</template>

<script>
import SigninComponent from './SigninComponent.vue';


export default {
  name: 'HomePage',
  components: {
    SigninComponent,
  },
   data() {
    return {
      user: null,
    };
  },

  methods: {
    updateUser(newUser) {
      this.user = newUser;
    },
  }
}
</script>

<style scoped>
.loading {
  cursor: not-allowed;
  opacity: 0.5;
}

.loading-text {
  opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>