<template>
	<div v-for="message in messages" :key="message.id">
	<p><pre><b>{{ message.user_id.username }}</b>	<i style="font-size: 12px;">Posted at: {{ message.created_at }}</i></pre></p>
	<p>{{ message.body }}</p>
	<hr/>
	<!-- if there are squiggly lines, they don't actually mean it's broken for some reason it can't resolve that the user IS being called -->
	</div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      messages: [] // using defineComponent this can be used to retrieve the user table from the backend using the axio.get
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/message')
      .then((response) => {
        this.messages = response.data // returns the response data into the users variable which can then be used in the template
      })
  }
})
</script>