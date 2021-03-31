<template>
  <v-main>
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
            v-model="email" 
            label="Correo"
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
        <v-btn to="/registro" color="success">
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
  </v-main>
</template>
<script>
import { Auth } from "@/firebase";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'El correo es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo debe ser válido must be valid',
      ],
      password: "",
      passwordRules: [ v => !!v || 'La contraseña es requerida'],
      showPassword: false,
    }
  },
  methods: {
		...mapActions(['setUser']),
    validate(){
       this.$refs.form.validate()
    },
    login() {
			Auth.signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
					this.setUser(response.user)
          this.$router.push("/apod");
        })
        .catch((error) => {
          alert("Usuario o contraseña inválidos", error);
      });
    }
  }
};
</script>