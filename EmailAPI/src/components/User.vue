<template>
    <div>
      <slot :user="user" @update-user="updateUser"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name:'UserComponent',
    data() {
      return {
        user: null,
      };
    },
    inject: ['user', 'setUser'],
    methods: {
      updateUser(user) {
        this.user = user;
      },
    },
  };
  </script>