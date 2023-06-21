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
        <p class="title-page" v-text="$trans('Verificação')"></p>
        <span class="text-sub" v-text="$trans('Enviamos o código de verificação para {{tel}}')">
        </span>

        <v-form class="mt-4">
          <v-otp-input
            length="4"
            type="number"
          ></v-otp-input>
  
          <v-btn class="btn-enviar pa-6 mt-8" block color="#CD2027" v-text="$trans('Continuar')">
          </v-btn>
        </v-form>
      </v-col>
      <v-col class="mt-6 d-flex justify-center" cols="12" no-gutters>
        <span class="text-registrar">
          {{ $trans('Reenviar código em') }}
          <v-btn text class="px-0 btn-clock">
            0:20
          </v-btn>
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Verificacao',
    data () {
      return {
        tel: '+351 987 654 321'
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .title-page{
    font-family: 'Azeret Mono';
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0px;
    color: #1C2026;
  }

  .text-sub{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    line-height: 25px;
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
  .btn-clock{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    color: #5669FF;
    text-transform: none;
  }

</style>