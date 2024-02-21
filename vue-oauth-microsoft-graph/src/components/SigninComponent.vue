<template>
    <div>
      <button v-if="user" @click="signInAndGetUser">Sign in</button>
      <button v-else @click="signOut">Sign out</button>
    </div>
  </template>
  
  <script>
  import { signInAndGetUser, signOut } from '../lib/microsoftGraph';
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
        signOut();
        this.setUser(null);
        localStorage.removeItem(userKey);
      },
    },
  };
  </script>