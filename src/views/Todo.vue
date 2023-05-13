<template>
  <div class="home">
    <new-task/>
    <task-list  v-if="$store.state.tasks.length"/>
    <div v-else class="noTask">
      <v-icon size="150" color="primary lighten-2" class="">mdi-checkbox-marked-circle-auto-outline</v-icon>
      <div class="text-h4 primary--text">No tasks :)</div>
    </div>
  </div>
</template>

<script>


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Todo',
  methods: {
    
  },
  components:{
    'new-task': require('@/components/Todo/newTask.vue').default,
    'task-list': require('@/components/Todo/taskList.vue').default
  }
}
</script>

<style lang="css">
  .noTask{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.2;
  }
</style>
