<template>
  <div>
    <h1>Welcome to the Email manager!</h1>
    <SigninComponent @update-user="updateUser" />
  </div>
</template>

<script>
import SigninComponent from './SigninComponent.vue';
import { mapState } from 'vuex';


export default {
  name: 'HomePage',
  computed: {
    ...mapState('user', ['user']),
  },
  components: {
    SigninComponent
  },
  props: {
    label: {
      type: String,
      default: 'Click me'
    },
    wait: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isLoading: false,
      disabled: false,
      clicks: 0,
      delay: 2000
    }
  },
  methods: {
    handleClick () {
      this.isLoading = true
      setTimeout(() => {
        this.$emit('click')
        this.isLoading = false
      }, this.wait)
    },
    handleButtonClick () {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 2000)
    },
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