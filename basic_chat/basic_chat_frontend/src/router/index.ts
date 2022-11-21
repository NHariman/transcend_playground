// https://levelup.gitconnected.com/how-to-handle-routing-with-vue-router-in-vue-3-59095af9c07a

import { createWebHistory, createRouter } from 'vue-router';
import ShowUsers from '@/components/user/showUsers.vue';
import CreateUser from '@/components/user/postUser.vue';
import Counter from '@/components/increment/incrementNumber.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import ChatMessages from '@/components/message/getMessages.vue'
import Chat from '@/components/message/viewChat.vue';

// this is where you find all the routes which are called if you go to different urls
// they load on top of App.vue, which is the main page
// anything in App.vue is always displayed, when a route is given then that part keeps updating

const routes = [
	{
		path: '/users',
		name: 'Users',
		component: ShowUsers, // see imports for the location of each component
	},
	{
		path: '/users/create',
		name: 'Create Users',
		component: CreateUser,
	},
	{
		path: '/counter',
		name: 'Counter',
		component: Counter,
	},
	{
		path: '/helloworld',
		name: 'hello world',
		component: HelloWorld,
	},
	{
		path: '/messages',
		name: 'chat messages',
		component: ChatMessages,
	},
	{
		path: '/chat',
		name: 'chat',
		component: Chat,
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
})
export default router