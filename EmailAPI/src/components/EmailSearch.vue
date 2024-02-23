<!-- EmailSearch.vue -->
<template>
  <div>
    <label for="searchSender">Search by Sender:</label>
    <input type="text" id="searchSender" v-model="searchSender" @input="searchEmails" />

    <label for="searchKeyword">Search by Keyword:</label>
    <input type="text" id="searchKeyword" v-model="searchKeyword" @input="searchEmails" />

    <label for="searchDateTime">Search by Date-Time:</label>
    <input type="datetime-local" id="searchDateTime" v-model="searchDateTime" @input="searchEmails" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchSender: '',
      searchKeyword: '',
      searchDateTime: '',
    };
  },
  methods: {
    searchEmails() {
      this.$emit('search', {
        searchSender: this.searchSender,
        searchKeyword: this.searchKeyword,
        searchDateTime: this.searchDateTime,
      });
    },
  },
};
</script>

<style scoped>
</style>