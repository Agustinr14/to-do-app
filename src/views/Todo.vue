<template>
  <div class="home">
    <new-task/>
    <task-list  v-if="$store.state.tasks.length"/>
    <no-task v-else/>
  </div>
</template>

<script>  


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Todo',
  methods: {
    
  },
  components:{
    'new-task': require('@/components/Todo/NewTask.vue').default,
    'task-list': require('@/components/Todo/TaskList.vue').default,
    'no-task':require('@/components/Todo/NoTask.vue').default
  }
}
</script>


