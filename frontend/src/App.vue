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
          v-for="link in links"
          :key="`${link.label}-header-link`"
          text
          :to='link.url'
        >
          {{ link.label }}
        </v-btn>
        <v-btn
        @click="logout"
        >
        Salir
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
  data() {
		return {
			links: [
				{
					label: 'Inicio',
					url: '/'
				},
				{
					label: 'Ingreso',
					url: '/ingreso'
				},
				{
					label: 'Apod',
					url: '/apod'
				}
			]
		}
	},
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
