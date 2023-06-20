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
        <p class="title-page" v-text="$trans('Alterar Palavra Passe')"></p>
        <span class="text-sub" v-text="$trans('Digite seu endereço de e-mail para solicitar uma redefinição de senha')">
        </span>

        <v-form class="mt-4">
          <v-text-field
            outlined
            label="Email"
            placeholder="abc@email.com"
            prepend-inner-icon="mdi-email-outline"
          ></v-text-field>
  
          <v-btn class="btn-enviar pa-6 mt-4" block color="#CD2027" v-text="$trans('Enviar')">
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'AlterarPalavraPasse',
    data () {
      return {
        
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
</style>