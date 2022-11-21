<template>
	<img alt="Vue logo" src="./assets/logo.png">
	<h1>Don't forget to start up the backend to make this work (use the basic_chat backend!)</h1>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/chat">Chat</a></li>
		<li><a href="/users/create">Create User</a></li>
		<li><a href="/users">View Users</a></li>
		<li><a href="/messages">View messages</a></li>
		<li><a href="/helloworld">helloworld</a></li>
		<li><a href="/counter">counter</a></li>
	</ul>
	<router-view :key="$route.path" />
</template>

<script lang="ts">
// this is the main page, so it can be used to set a default header and footer
// or a menu bar that doesn't change.
// the router-view updates as you visit different parts such as /users or /users/create
// and the view updates based on that
import { Options, Vue } from 'vue-class-component';

// components are small parts of code to keep everything clean and simple. 
// for example, the vue logo and the reminder could be put into a component 
// and called by first putting it in the components section in options
// and then called with <Component_name/> in the template.

@Options({
	components: {
	}
})
export default class App extends Vue {
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
