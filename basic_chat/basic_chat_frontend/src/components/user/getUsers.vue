<template>
	<div v-for="user in users" :key="user.id">
	<h2>{{ user.id }} {{ user.username }}</h2>
	<p>{{ user.email }}</p>
	<!-- if there are squiggly lines, they don't actually mean it's broken for some reason it can't resolve that the user IS being called -->
	</div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      users: [] // using defineComponent this can be used to retrieve the user table
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/user')
      .then((response) => {
        this.users = response.data // returns the response data into the users variable which can then be used in the template
      })
  }
})
</script>