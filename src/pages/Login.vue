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
        ></v-text-field>
        <v-text-field
          outlined
          label="Palavra chave"
          placeholder="**********"
          prepend-inner-icon="mdi-key-outline"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          @click:append="showPass = !showPass"
        ></v-text-field>
        
        <v-row no-gutters>
          <v-col cols="7">
            <v-switch
              v-model="switch1"
              inset
              label="Remember Me"
              class="mt-0"
            ></v-switch>
          </v-col>
          <v-col class="mt-n1" cols="5">
            <v-btn text class="btn-forgot">
              Forgot password?
            </v-btn>
          </v-col>
        </v-row>

        <v-btn class="btn-enviar pa-6" block color="#CD2027">
          Enviar
        </v-btn>
      </v-form>
    </v-col>
    <v-col class="mt-6" cols="12">
      <p>
        Não tenho conta?
        <v-btn text>
          Registrar-se
        </v-btn>
      </p>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        switch1: true,
        showPass: false
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

</style>