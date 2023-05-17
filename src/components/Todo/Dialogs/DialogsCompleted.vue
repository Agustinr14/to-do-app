<template>
    <v-dialog :value="true" persistent max-width="290">
        <v-card>
            <v-card-title class="text-h5">
                Task Completed
            </v-card-title>
            <v-card-text>Are you sure you want to archive this task completed?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary lighten-3" text @click="$emit('close')">
                    Cancel
                </v-btn>
                <v-btn color="Warning" text @click="completedTask()" >
                    Archived
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props:['user','task',],
    data(){
        return{

        }
    },
    methods:{
        completedTask(){
            let payload = {
                id:this.task.id,
                title: this.task.taskTitle,
                done: this.task.done,
                createdBy: this.task.createdBy,
                doneBy: this.task.doneBy

            }
            this.$store.dispatch('completedTask',payload)
            this.$store.dispatch('removeTask',this.task.id)
            this.$emit('close')
        }
    },
}
</script>

<style></style>