<template>
  <v-row
    class="mt-16"
    justify="center"
    no-gutters
  >
    <v-col lg="6" md="8" xl="7">
      <v-card
        class="mx-auto"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">Login</v-list-item-title>
            <v-list-item-subtitle>Entre com seu usuário e senha</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-form @submit="onLogin">
          <v-card-text>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="Usuário"
                placeholder="Insira seu usuário"
                outlined
                v-model="user.email"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="Senha"
                placeholder="Insira sua senha"
                outlined
                type="password"
                v-model="user.password"
              ></v-text-field>
            </v-col>

            <v-col class="text-right" cols="12">
              <v-btn
                large
                color="primary"
                @click="onLogin"
                :loading="isLoading"
                :disabled="isLoading"
              >
                Entrar
              </v-btn>
            </v-col>
          </v-card-text>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        user: {
          email: '',
          password: ''
        },
        isLoading: false
      }
    },
    methods: {
      ...mapActions('users', ['login']),
      async onLogin () {
        this.isLoading = true
        if (this.user.email && this.user.password) {
          let resp = await this.login(this.user)
          if (resp.status) {
            this.$eventHub.$emit('snackBar', {color: 'success', message: 'Bem vindo'})
            this.$router.push('/admin')
          } else {
            this.$eventHub.$emit('snackBar', {color: 'error', message: 'Usuário ou senha inválido'})
          }
        }
        this.isLoading = false
      }
    }
  }
</script>