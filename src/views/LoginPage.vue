<template>
    <div>
        <template>
            <div>
                <h1 class="ml-2">Login</h1>
            </div>
            <v-form >
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="firstName" :counter="10" label="First name"
                                required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field v-model="lastName"  :counter="10" label="Last name"
                                required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-btn class="mr-4" type="submit" @click="submit()" >
                                submit
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </template>
    </div>
</template>

<script>
export default {
    data: () => ({
        firstName : '',
        lastName:''

    }),
    methods: {
        submit(){
           this.$store.commit('userLogin',this.firstName)
        }
    },
}
</script>