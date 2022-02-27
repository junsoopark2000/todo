<template>
	<div class="my-footer">
		<button @click="clearToDoList">Clear All</button>
	</div>
</template>

<script>
export default {
	name: "ToDoFooter",
	methods: {
		clearToDoList() {
			this.$store.commit("clearToDoList");
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
