<template>
	<div id="app">
		<ToDoHeader />
		<ToDoList />
		<ToDoFooter />
	</div>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoFooter from "./components/ToDoFooter.vue";

export default {
	name: "App",
	components: {
		ToDoHeader,
		ToDoList,
		ToDoFooter,
	},
};
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
