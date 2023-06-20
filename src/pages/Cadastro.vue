<template>
  <v-container>
    <v-row class="mt-2">
      <v-col class="px-8" cols="12" no-gutters>
        <v-icon @click="$router.push('/login')">
          mdi-arrow-left
        </v-icon>
      </v-col>
    </v-row>
    <v-row class="mt-6 px-5" justify="center" no-gutters>
      <v-col cols="12">
        <p class="text-entrar"></p>
        <v-form>
          <v-text-field
            outlined
            label="Nome Completo"
            placeholder="Nome Completo"
            prepend-inner-icon="mdi-account-outline"
            v-model="user.name"
          ></v-text-field>
          <v-text-field
            outlined
            label="Email"
            placeholder="abc@email.com"
            prepend-inner-icon="mdi-email-outline"
            v-model="user.email"
          ></v-text-field>
          <v-text-field
            outlined
            label="Palavra Passe"
            placeholder="**********"
            prepend-inner-icon="mdi-key-outline"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
            v-model="user.password"
          ></v-text-field>
          <v-text-field
            outlined
            label="Confirmar Palavra Passe"
            placeholder="**********"
            prepend-inner-icon="mdi-key-outline"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
            v-model="user.repassword"
          ></v-text-field>
  
          <v-btn class="btn-enviar pa-6 mt-4" block color="#CD2027" @click="onRegister" :loading="isLoading" :disabled="isLoading" v-text="$trans('Registrar')">
          </v-btn>
        </v-form>
      </v-col>
      <v-col class="mt-6 d-flex justify-center" cols="12" no-gutters>
        <span class="text-registrar" v-text="$trans('Já tem uma conta?')">
        </span>
        <v-btn text class="mt-n1 px-0 btn-registrar" @click="$router.push('/login')" v-text="$trans('Entrar')">
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: 'Cadastro',
    data () {
      return {
          showPass: false,
          isLoading: false,
          user: {
              name: null,
              email: null,
              password: null,
              repassword: null
          }
      }
    },
    methods: {
        ...mapActions('users', ['register']),
      async onRegister () {
            if (!this.user.name || !this.user.email || !this.user.password || !this.user.repassword) {
                this.$eventHub.$emit('snackBar', {color: 'error', message: 'Preencha todos os campos'})
                return
            }

          if (this.user.password != this.user.repassword) {
              this.$eventHub.$emit('snackBar', {color: 'error', message: 'Senhas não conferem'})
              return
          }

          const r = await this.register(this.user)
          if (r) {
              this.$eventHub.$emit('snackBar', {color: 'success', message: 'Usuário registrado com sucesso'})
              this.$router.push('/login')
          } else {
              this.$eventHub.$emit('snackBar', {color: 'error', message: 'Erro ao registrar usuário'})
          }
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