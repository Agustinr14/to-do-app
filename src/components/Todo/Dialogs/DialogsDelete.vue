<template>
    <v-dialog :value="true" persistent max-width="290">
        <v-card>
            <v-card-title class="text-h5">
                Delete Task
            </v-card-title>
            <v-card-text>Are you sure about delete this task?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary lighten-3" text @click="$emit('close')">
                    No
                </v-btn>
                <v-btn color="Warning" text @click="$store.dispatch('deleteTask',task.id)">
                    Yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props:['task']
}
</script>

<style></style>