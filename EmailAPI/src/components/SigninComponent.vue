<template>
  <div>
    <button v-if="!user" @click="signInAndGetUser">Sign in with Microsoft</button>
    <div v-else>
      Welcome, {{ user.name }} ({{ user.email }})
      <button @click="signOutUser">Sign out</button>
    </div>
  </div>
</template>

<script>
import { signInAndGetUser, signOutUser } from '../lib/microsoftGraph';
import { userKey } from '../key.js';

export default {
  name: 'SigninComponent',
  inject: {
    user: {
      type: Object,
      default: null,
    },
    setUser: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    async signInAndGetUser() {
      const authResult = await signInAndGetUser();
      this.setUser(authResult.account);
      localStorage.setItem(userKey, JSON.stringify(authResult.account));
    },
    signOut() {
      signOutUser();
      this.setUser(null);
      localStorage.removeItem(userKey);
    },
  },
};
</script>
