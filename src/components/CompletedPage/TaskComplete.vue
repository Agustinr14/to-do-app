<template>
  <div>
    <v-list-item>
      <template v-slot:default>
        
        <v-list-item-content>
          <v-list-item-title>
          Task : {{completedTask.title}}
          </v-list-item-title>
        
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>Done by :  {{completedTask.by}}</v-list-item-title>
        </v-list-item-content>
      </template>
      
    </v-list-item>

    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
    props:['completedTask']
}
</script>

<style>

</style>