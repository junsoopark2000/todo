<template>
	<div>
		<h1 class="title">To Do List</h1>
		<div class="date-time">
			{{ dayTime }}
		</div>
	</div>
</template>

<script>
export default {
	name: "ToDoHeader",
	computed: {
		dayTime() {
			return "this is current day and time";
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
