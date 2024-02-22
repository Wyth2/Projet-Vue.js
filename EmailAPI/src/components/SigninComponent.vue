<template>
  <div>
    <button v-if="!isAuthenticated" @click="signInAndGetUser">Sign in with Microsoft</button>
    <div v-else>
      Welcome, {{ user.name }} ({{ user.email }})
      <button @click="signOut">Sign out</button>
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
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    async signInAndGetUser() {
      const authResult = await signInAndGetUser();
      this.setUser(authResult.account);
      localStorage.setItem(userKey, JSON.stringify(authResult.account));
      this.isAuthenticated = true; // Utilisateur connecté
    },
    signOut() {
      signOutUser();
      this.setUser(null);
      localStorage.removeItem(userKey);
      this.isAuthenticated = false; // Utilisateur déconnecté
    },
  },
};
</script>
