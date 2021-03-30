<template>
  <v-app>
    <v-app-bar
      dark
      app
      color="deep-purple accent-4"
    >
      <v-app-bar-nav-icon />
      <v-toolbar-title>Fullstack js app</v-toolbar-title>
      <v-spacer />
      <v-btn
        color="white"
        text
      >
        Home
      </v-btn>
      <v-btn
        v-if="!user"
        to="/ingreso"
        color="white"
        text
      >
        Login
      </v-btn>
      <v-btn
        v-if="user"
        color="white"
        text
        @click="logout"
      >
        Logout
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Auth } from '@/firebase';
export default {
  name: "App",
  computed:{
    ...mapState(['user'])
  },
  created(){
    let user = Auth.currentUser
    this.setUser(user)
  },
  methods: {
    ...mapActions(['setUser']),
   logout(){
    Auth.signOut().then(() => {
      this.setUser(null)
      this.$router.push('/ingreso')
      })
    }
  }
};
</script>
