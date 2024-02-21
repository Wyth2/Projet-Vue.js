<template>
  <div id="app">
    <HomePage :user="user" @update-user="updateUser"/>
    <header>
      <HomePage/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import { userKey } from './key.js';
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState('user', ['name']),
  },
  components: {
    HomePage,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

header {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

header a {
  color: #2c3e50;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;
}

header a:hover {
  color: #42b983;
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