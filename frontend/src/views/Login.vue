<template>
  <v-app>
    <v-card
      width="400px"
      class="mx-auto my-auto"
    >
      <v-card-title class="pb-0">
        <h1 class="mx-auto mb-5">
          Ingreso
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="user" 
            label="Usuario"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            v-model="password"
            label="Contraseña"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn color="success">
          Registro
        </v-btn>
        <v-spacer />
        <v-btn
          color="info"
          @click="login"
        >
          Ingresar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
<script>
import { Auth } from "@/firebase";
import { mapActions } from "vuex";

export default {
  data: () => ({
    user: "",
    password: "",
    showPassword: false
  }),
  methods: {
		...mapActions(['setUser']),
    login() {
			Auth.signInWithEmailAndPassword(this.user, this.password)
        .then((user) => {
					this.setUser(user)
          this.$router.push("/apod");
        })
        .catch((error) => {
          alert("Usuario o contraseña inválidos", error);
        });
    }
  }
};
</script>