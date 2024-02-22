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

<style scoped>
  /* Add your specific styles here */

  button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #2980b9;
  }

  div {
    text-align: center;
  }

  div button {
    background-color: #e74c3c;
    margin-top: 10px;
  }

  div button:hover {
    background-color: #c0392b;
  }

  div div {
    margin-top: 20px;
  }

  div div button {
    background-color: #3498db;
    margin-top: 10px;
  }

  div div button:hover {
    background-color: #2980b9;
  }
</style>

