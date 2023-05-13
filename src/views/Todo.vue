<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      class="pa-3"
      @click:append="addTask()"
      @keyup.enter="addTask()"
      outlined
      label="Add new task"
      append-icon="mdi-plus-box"
      hide-details
      clearable>
    </v-text-field>
    <v-list class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item @click="doneTask(task.id)" :class="{ 'teal lighten-4': task.done }">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)" >
                <v-icon color="primary lighten-3">mdi-close-box</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>

        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Todo',
  data() {
    return {
      newTaskTitle: '',
        tasks: [
        
        ]
    }
  },
  methods: {
    addTask(){
      let newTask ={
      id: Date.now(),
      title: this.newTaskTitle,
      done: false
     }
      if(newTask.title != ''){
      this.tasks.push(newTask)
      this.newTaskTitle = ''
      }else{
        alert('Empty task')
      }
    },
    doneTask(id) {
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }

}
</script>
