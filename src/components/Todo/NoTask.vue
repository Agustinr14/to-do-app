<template>
    <div class="noTask">
        <v-icon size="150" color="primary lighten-2" class="">mdi-checkbox-marked-circle-auto-outline</v-icon>
        <div class="text-h4 primary--text">No tasks :)</div>
    </div>
</template>

<script>
export default {

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