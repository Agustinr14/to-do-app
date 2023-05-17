<template>
  <v-app id="inspire">
    <v-navigation-drawer color="grey lighten-3" v-model="drawer" app>
      <v-list-item>
          <v-list-item-content v-if="$store.state.user.firstName === ''" >
            <v-list-item-title class="text-h6">
              Hello!
            </v-list-item-title>
            <v-list-item-subtitle>
              If you are not login
               <router-link  ter-link to="/Login">
                <v-icon color="primary lighten-2">
                  mdi-login-variant
                </v-icon>
              </router-link>
            </v-list-item-subtitle>
          </v-list-item-content> 
          <v-list-item-content v-else>
            <v-list-item-title class="text-h6">
              Welcome back !
            </v-list-item-title>
            <v-list-item-subtitle >
              {{$store.state.user.firstName}} {{ $store.state.user.lastName}}
              <v-icon @click="userLogout()" color="primary lighten-2">
                mdi-logout-variant
              </v-icon>
            </v-list-item-subtitle>
          </v-list-item-content> 
        </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link @click="xd()">
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

      <v-toolbar-title class="" >To-Do App</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon v-if="location === 'http://localhost:8080/?#/completati'">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
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
    location: '',
    items: [
      { title: 'To-Do List', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'Complete', icon:'mdi-check-all', to:'/completati'},
      { title: 'Albo', icon: 'mdi-thought-bubble', to: '/albo' }
      
    ]
  }),
  components:{
    'snackbar':require('@/components/Utils/Snackbar.vue').default
  },
  methods:{
    userLogout(){
      this.$store.commit('userLogout')
      this.$router.push('/Login')
    },
    xd(){
      console.log(window.location.href);
      this.location = window.location.href
    }
  }
};
</script>
