<template>
  <div>
    <v-row class="mt-2">
      <v-col class="px-8" cols="12" no-gutters>
        <v-icon @click="$router.push('/login')">
          mdi-arrow-left
        </v-icon>
      </v-col>
    </v-row>
    <v-row class="mt-6 px-5" justify="center" no-gutters>
      <v-col cols="12">
        <p class="text-entrar">Registrar</p>
        <v-form>
          <v-text-field
            outlined
            label="Nome Completo"
            placeholder="Nome Completo"
            prepend-inner-icon="mdi-account-outline"
          ></v-text-field>
          <v-text-field
            outlined
            label="Email"
            placeholder="abc@email.com"
            prepend-inner-icon="mdi-email-outline"
          ></v-text-field>
          <v-text-field
            outlined
            label="Palavra Passe"
            placeholder="**********"
            prepend-inner-icon="mdi-key-outline"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
          ></v-text-field>
          <v-text-field
            outlined
            label="Confirmar Palavra Passe"
            placeholder="**********"
            prepend-inner-icon="mdi-key-outline"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
          ></v-text-field>
  
          <v-btn class="btn-enviar pa-6 mt-4" block color="#CD2027">
            Registrar
          </v-btn>
        </v-form>
      </v-col>
      <v-col class="mt-6 d-flex justify-center" cols="12" no-gutters>
        <span class="text-registrar">
          Já tem uma conta?
          <v-btn text class="mt-n1 px-0 btn-registrar" @click="$router.push('/login')">
            Entrar
          </v-btn>
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Cadastro',
    data () {
      return {

      }
    },
    methods: {
      
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