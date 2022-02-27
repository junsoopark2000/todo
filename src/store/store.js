import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: true,

	state: {
		toDoList: [],
	},

	getters: {
		// toDoList: state => {
		// 	return state.toDoList;
		// },
	},

	mutations: {
		addItem: (state, newToDoItem) => {
			state.toDoList.push(newToDoItem);
		},
		clearToDoList: (state) => {
			state.toDoList = [];
		},
	},

	actions: {
		addItemDelayed: (context, newToDoItem) => {
			setTimeout(() => {
				context.commit("addItem", newToDoItem);
			}, 3000);
		},
	},
});

export default store;
