import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      
    ],
    snackbar:{
      show:false,
      text:''
    }
  },
  getters: {
  },
  mutations: {
    addTask(state, newTaskTitle){
      let newTask ={
      id: Date.now(),
      title: newTaskTitle,
      done: false
     }
      if(newTask.title != ''){
      state.tasks.push(newTask)
      }else{
        alert('Empty task')
      }
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    editTask(state,payload){
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.title
    },
    showSnackBar(state, text){
      let timeout = 0
      if(state.snackbar.show){
        state.snackbar.show = false
        timeout = 200
      }setTimeout (()=>{
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout)
      
    }
  },
  actions: {
   addTask({commit}, newTaskTitle){
    commit('addTask', newTaskTitle)
    commit('showSnackBar', 'New task added.')
   },
   deleteTask({commit},id){
    commit('deleteTask', id)
    commit('showSnackBar', 'Task deleted.')
   },
   editTask({commit},payload){
    commit('editTask',payload)
    commit('showSnackBar', 'Task edit.')
   }
  },
  modules: {
  }
})
