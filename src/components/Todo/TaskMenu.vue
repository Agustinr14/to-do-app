<template>
    <div>
        <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary lighten-2" icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" @click="handleClick(i)">
                    <v-list-item-icon>
                        <v-icon color="primary lighten-2" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <dialog-delete v-if="dialogs.delete" @close="dialogs.delete = false" :task="task"/>
        <dialogs-edit v-if="dialogs.edit" @close="dialogs.edit = false" :task="task"/>
    </div>
</template>

<script>
export default {
    components:{
        'dialog-delete':require('@/components/Todo/Dialogs/DialogsDelete.vue').default,
        'dialogs-edit':require('@/components/Todo/Dialogs/DialogsEdit.vue').default
    },
    props: ['task'],
    data: () => ({
        dialogs:{
            delete: false,
            edit:false
        },
        items: [
            {
                title: 'Edit',
                icon: 'mdi-pencil-outline',
                click() {
                    this.dialogs.edit = true

                }
            },
            {
                title: 'Delete',
                icon: 'mdi-trash-can-outline',
                click() {
                    this.dialogs.delete = true
                }
            },
        ],

    }),
    methods: {
        handleClick(i) {
            this.items[i].click.call(this)

        }
    },
}
</script>

<style></style>