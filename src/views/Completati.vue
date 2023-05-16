<!-- eslint-disable vue/multi-word-component-names -->
//esli
<template>
  <div class="home">
    <task-complete-page v-if="$store.state.completedTasks.length" />
  </div>
</template>

<script>
export default {
  components:{
    'task-complete-page':require('@/components/CompletedPage/TaskCompleteList.vue').default
  }
}
</script>

<style>

</style>