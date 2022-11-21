<template>
	<section>
	<form @submit.prevent="createPost">
		<div>
			<label for="username">Username:</label>
			<input type="text" id="username" v-model="postData.username" required>
		</div>
		<div>
			<label for="email">E-Mail: </label>
			<input type="text" id="email" v-model="postData.email" required>
		</div>
		<div>
			<label for="password">password: </label>
			<input type="text" id="password" v-model="postData.password" required>
		</div>
		<button>Create User</button>
	</form>
	</section>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
	return {
			postData: {
				username: '',
				email: '',
				password: ''
			}
		}
	},
	methods: {
		createPost() {
			axios
				.post('http://localhost:3000/user/create', this.postData)
				.then(
				(response) => {
						console.log(response)
						this.$router.push('/users') // upon success, the user will be redirected to http://localhost:8080/users to view the users
					} 
				) // axios throws errors for non 2xx responses by default!
				.catch(
					// handle errors here
				)
		}
	}
})
</script>