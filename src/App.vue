<template>
  <v-app id="inspire">
    <v-navigation-drawer color="grey lighten-3" v-model="drawer" app>
      <v-list-item>
          <v-list-item-content v-if="$store.state.user.firstName === ''" >
            <v-list-item-title class="text-h6">
              Hello!
            </v-list-item-title>
            <v-list-item-subtitle>
              If you not are login
               <router-link to="/Login">
                <v-icon class="">
                  mdi-login
                </v-icon>
              </router-link>
            </v-list-item-subtitle>
          </v-list-item-content> 
          <v-list-item-content v-else>
            <v-list-item-title class="text-h6">
              Welcome back !
            </v-list-item-title>
            <v-list-item-subtitle>
              {{$store.state.user.firstName}}
            </v-list-item-subtitle>
          </v-list-item-content> 
        </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="teal darken-2" dark prominent>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>To-Do App</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>


    <v-main>
      <!--  -->
      <router-view></router-view>
      <snackbar/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
    //
    drawer: null,
    items: [
      { title: 'To-Do List', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'Completati', icon:'mdi-check-all', to:'/completati'},
      { title: 'About', icon: 'mdi-help-box', to: '/about' }
      
    ]
  }),
  components:{
    'snackbar':require('@/components/Utils/Snackbar.vue').default
  }
};
</script>
