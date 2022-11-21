<template>
	<button v-if="!hideUsers" @click="hideUsers = true">Hide Users</button>
<button v-if="hideUsers"  @click="hideUsers = !hideUsers">Show Users</button>
<div v-if="!hideUsers">
<GetUsers/>
</div>
</template>

<script lang="ts">
// creates a toggle for hiding or viewing users
import GetUsers from './getUsers.vue';

export default {
	components: {
		GetUsers
	},
	data() {
		return {
			hideUsers: false
		};
	}
}
</script>