<template>
    <div class="signin-button">
      <button v-if="!user" @click="signIn">Sign in</button>
      Welcome, {{ user.name }} ({{ user.email }})
      <div v-else>
        Welcome, {{ user.name }} ({{ user.email }})
        <button @click="signOut">Sign out</button>
      </div>
    </div>
  </template>
  
  <script>
  import { signInAndGetUser } from '../lib/microsoftGraph';
  
  export default {
    data() {
      return {
        user: null,
      };
    },
    methods: {
      async signIn() {
        const user = await signInAndGetUser();
        this.user = user;
      },
    },
  };
  </script>