<template>
  <div>
    <header>
      <FakeHomeLink/>
      <FakeUserName/>
    </header>
    <main>
      <slot/>
    </main>
    <footer>
      <LegalCredits/>
    </footer>
  </div>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue'

export default {
  name: 'BaseLayout',
  components: {
    BaseLayout,
  }
}
</script>

<style scoped>
header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: right;
}

footer {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}
</style>