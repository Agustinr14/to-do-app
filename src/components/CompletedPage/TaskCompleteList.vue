<template>
    <v-list class="pt-0" flat>
     <task-complete v-for="completedTask in $store.state.completedTasks" :key="completedTask.id" :completedTask="completedTask"/>
  </v-list>
</template>
<script>
export default {
  components:{
    'task-complete':require('@/components/CompletedPage/TaskComplete.vue').default
  }
}
</script>

<style>

</style>