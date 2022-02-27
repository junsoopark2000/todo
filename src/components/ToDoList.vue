<template>
	<div>
		<div>
			<input type="text" v-model="fields" />
			<input type="button" value="Add" @click="addItem()" />
			<input type="button" value="Delayed Add" @click="addItemDelayed()" />
		</div>
		<ul>
			<li v-for="(item, idx) in toDoList" :key="idx">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "ToDoList",

	data() {
		return {
			fields: "",
		};
	},

	methods: {
		addItem() {
			if (this.fields) {
				this.$store.commit("addItem", this.fields);
				this.fields = "";
			}
		},
		// ...mapMutations(["addItem"]),
		// possible to send parmeter with mapMutationtions ??

		addItemDelayed() {
			if (this.fields) {
				this.$store.dispatch("addItemDelayed", this.fields);
				this.fields = "";
			}
		},
	},

	computed: {
		// toDoList() {
		// 	return this.$store.state.toDoList;
		// },
		// ...mapGetters(["toDoList"]),
		...mapState(["toDoList"]),
		// both of them works repectively
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
