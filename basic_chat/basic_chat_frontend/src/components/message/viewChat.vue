<template>
<PostMessages/>
<GetMessages/>
</template>

<script lang="ts">
import GetMessages from './getMessages.vue';
import PostMessages from './postChat.vue';

export default {
	components: {
		GetMessages,
		PostMessages,
	},
}
// creates a view that displays a way to send chat messages AND view them
</script>