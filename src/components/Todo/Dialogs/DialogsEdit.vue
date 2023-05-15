<template>
    <v-dialog :value="true" persistent max-width="290">
        <v-card>
            <v-card-title class="text-h5">
                Edit task name.
            </v-card-title>
            <v-card-text>Re-name the task:
                <v-text-field
                 v-model="taskTitle"
                 @keyup.enter="editTask"
                 
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary lighten-3" text @click="$emit('close')">
                    Cancel
                </v-btn>
                <v-btn color="Warning" text @click="editTask()" :disabled="!taskTitle">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props:['task'],
    data(){
        return{
            taskTitle: null
        }
    },
    methods:{
        editTask(){
            let payload = {
                id:this.task.id,
                title: this.taskTitle
            }
            this.$store.dispatch('editTask',payload)
            this.$emit('close')
        }
    },
    mounted(){
        this.taskTitle = this.task.title
    }
}
</script>

<style></style>