<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-list-item @click="$store.commit('doneTask', task.id)" :class="{ 'teal lighten-4': task.done }">
      <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="task.done"></v-checkbox>
          </v-list-item-action>
          <v-list-item-action v-if="task.done">
            <v-icon class="pr-4" @click="taskArchiviati()">mdi-archive-arrow-down-outline</v-icon>
          </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title :class="{ 'text-decoration-line-through' : task.done }">
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>
      </template>

    </v-list-item>
    <v-divider></v-divider>
    <dialogs-completed v-if="dialogs.complete" @close="dialogs.complete = false" :task="task" :user="user"/>
  </div>
</template>

<script>
export default {
  props: ['task', 'user'],
  data(){
    return{
      dialogs: {
        complete: false
      }
    }
  },
  components: {
    'task-menu': require('@/components/Todo/TaskMenu.vue').default,
    'dialogs-completed':require('@/components/Todo/Dialogs/DialogsCompleted.vue').default

  },
  methods:{
    taskArchiviati(){
      this.dialogs.complete = true
    }
  }
}
</script>

<style></style>