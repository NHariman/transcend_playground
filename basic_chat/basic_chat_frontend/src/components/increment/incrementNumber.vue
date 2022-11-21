<template>
	<div>
		<button	v-on:click="decrementCount">decrement</button>
		<button v-on:click="incrementCount">increment</button>
		<p>{{ count }}</p>
	</div>
  </template>

  <script lang="ts">
  import { defineComponent} from 'vue';
  export default defineComponent({
   components:{},
	data(){
		return{
		count:0
	}
	},
	methods:{
		incrementCount() {
		this.count++;
	},
		decrementCount() {
		this.count--;
	}
	}
  })

//   <!-- So apparently you don't have to call it anything, you just define it in the import-
// 	this is just a toy function, it increases and decreases a number, it doesn't mean anything->
  </script>

