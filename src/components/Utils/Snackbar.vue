<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-snackbar
      v-model="$store.state.snackbar.show"
      timeout="800"
    >
      {{ $store.state.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary lighten-3"
          text
          v-bind="attrs"
          @click="$store.state.snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
  data: () => ({  
     
    }),
}
</script>

<style>

</style>