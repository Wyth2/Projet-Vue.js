<!-- EmailDetail.vue -->
<template>
  <div>
    <h2>Email Detail</h2>
    <div>{{ email.subject }}</div>
    <div>{{ email.sender }}</div>
    <div>{{ email.body }}</div>
    <!-- Additional details as needed -->
  </div>
</template>

<script>
export default {
  props: {
    email: Object, 
  },
};
</script>

<style>
</style>
