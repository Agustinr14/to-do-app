<template>
  <v-text-field v-model="newTaskTitle" class="pa-3" @click:append="addTask()" @keyup.enter="addTask()" outlined
    label="Add new task" append-icon="mdi-plus-box" hide-details clearable>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: '',
    }

  },
  methods: {
    addTask() {
      this.$store.dispatch('addTask', this.newTaskTitle)
      this.newTaskTitle = ''
    }
  }
}

</script>

<style></style>