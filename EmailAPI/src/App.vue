<template>
  <div id="app">
    <HomePage :user="user" @update-user="updateUser"/>
    <EmailList />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import { userKey } from './key.js';
import EmailList from './components/EmailList.vue';

export default {
  name: 'App',
  components: {
    HomePage,
     EmailList,
  },
  data() {
    return {
      user:{ name: 'John Doe' },
    };
  },
  provide() {
  return {
    user: this.user,
    setUser: (newUser) => {
      this.user = newUser;
    },
  };
},
  created() {
    const storedUser = localStorage.getItem(userKey);
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  },
  methods: {
    updateUser(user) {
      this.user = user;
      localStorage.setItem(userKey, JSON.stringify(user));
    },
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  color: #333; /* Changed text color to a darker shade for better readability */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5; /* Set a light background color */
}

header {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: space-between; /* Change to space-between to evenly distribute items */
  align-items: center; /* Align items vertically centered */
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

header a {
  color: #3498db; /* Change link color to a shade of blue */
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;
}

header a:hover {
  color: #2980b9; /* Change link color on hover */
}

main {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

footer {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #ddd;
}

</style>