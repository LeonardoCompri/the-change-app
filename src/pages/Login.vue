<template>
  <v-row class="mt-16 px-5" justify="center" no-gutters>
    <v-col class="d-flex justify-center" cols="12">
      <v-img
        lazy-src="../assets/logo_change.png"
        max-height="48"
        max-width="300"
        src="../assets/logo_change.png"
      ></v-img>
    </v-col>
    <v-col class="mt-12" cols="12">
      <p class="text-entrar">Entrar</p>
      <v-form>
        <v-text-field
          outlined
          label="Email"
          placeholder="abc@email.com"
          prepend-inner-icon="mdi-email-outline"
          v-model="user.email"
        ></v-text-field>
        <v-text-field
          outlined
          label="Palavra chave"
          placeholder="**********"
          prepend-inner-icon="mdi-key-outline"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          @click:append="showPass = !showPass"
          v-model="user.password"
        ></v-text-field>
        
        <v-row no-gutters>
          <v-col cols="7">
            <v-switch
              v-model="switch1"
              inset
              label="Remember Me"
              class="mt-0"
              style=""
            ></v-switch>
          </v-col>
          <v-col class="mt-n1" cols="5">
            <v-btn text class="btn-forgot" @click="$router.push('/alterar-palavra-passe')">
              Forgot password?
            </v-btn>
          </v-col>
        </v-row>

        <v-btn
          class="btn-enviar pa-6 mt-4"
          block
          color="#CD2027"
          @click="onLogin"
          :loading="isLoading"
          :disabled="isLoading"

        >
          Enviar
        </v-btn>
      </v-form>
    </v-col>
    <v-col class="mt-6 d-flex justify-center" cols="12" no-gutters>
      <span class="text-registrar">
        Não tenho conta?
        <v-btn text class="mt-n1 px-0 btn-registrar" @click="$router.push('/cadastro')">
          Registrar
        </v-btn>
      </span>
    </v-col>
  </v-row>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: 'Login',
    data () {
      return {
        switch1: true,
        showPass: false,
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
                  this.$router.push('/home')
              } else {
                  this.$eventHub.$emit('snackBar', {color: 'error', message: 'Usuário ou senha inválido'})
              }
          }
          this.isLoading = false
      }
    }
  }
</script>

<style scoped>
  .text-entrar{
    font-family: 'Azeret Mono';
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0px;
    color: #1C2026;
  }

  .btn-forgot{
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0px;
    color: #120D26;
  }

  button{
    text-transform: none !important;
  }
  .btn-enviar{
    font-family: 'Azeret Mono';
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    color: #fff;
    border-radius: 4px;
  }

  .text-registar{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
  }
  .btn-registrar{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    color: #5669FF;
    text-transform: none;
  }

</style>