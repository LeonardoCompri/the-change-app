<template>
  <v-container class="box">
    <div class="box-inicio mt-0" :style="`margin: -12px !important; display: flex !important`">

      <div class="d-flex flex-column aling-center"
        style="align-self: end; background: linear-gradient(180deg, rgba(6, 5, 24, 0) 24.94%, #060518 98.5%); padding-top: 50px; width: 100%">
        <v-col class="px-6" cols="12">
          <p class="azeret page-title mb-1" v-text="$trans('Juntos somos a Mudança.')">
          </p>
          <p class="inter page-subtitle" v-text="$trans('Obrigado por ajudares esta causa')">            
          </p>
        </v-col>
      </div>

    </div>


    <v-row class="px-6 mt-10">
      <v-col cols="12">
        <p class="inter text-1" v-text="$trans('Vamos transformar vidas, espalhar amor e esperança, e mostrar ao mundo que a fé pode mover montanhas!')">
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-2 px-6">
      <v-col cols="12">
        <p class="inter text-2" v-text="$trans('Clica em baixo para prosseguir.')">          
        </p>
      </v-col>
    </v-row>

    <v-card class="mx-6 px-3 card-donativo" :href="link_donativo" target="_blank">
      <v-row>
        <v-col cols="3">
          <v-btn color="#CD2027" class="btn-donativo">
            <v-icon color="#fff" class="icon-donativo">
              mdi-heart-circle-outline
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="7" class="px-0">
          <p class="mb-0 mt-1 azeret text-3" v-text="$trans('Donativo')">
          </p>
          <p class="mb-0 mt-1 inter text-4" v-text="$trans('Contribui apenas com o valor que conseguires.')">
          </p>
        </v-col>
        <v-col cols="2" class="px-0 d-flex align-center">
          <v-btn color="rgba(255, 251, 254, 0.2)" class="btn-donativo2">
            <v-icon color="#fff" class="icon-donativo2">
              mdi-hand-coin-outline
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-row class="px-6 mt-8">
      <v-col cols="12">
        <p class="azeret text-5">I am part of the change!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Donativo',
  data() {
    return {
      link_donativo: "https://donate.stripe.com/9AQ5lPbCA6bj1TqfYZ"
    }
  }
}
</script>

<style scoped>
.box {
  height: 100vh;
  background-color: #060518;
}

.box-inicio {
  height: 440px;
  background-image: url("../assets/donativo.jpg");
  background-size: 100%;
}

.azeret {
  font-family: 'Azeret Mono';
  font-style: normal;
}

.inter {
  font-family: 'Inter';
  font-style: normal;
}

.text {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
}

.page-title {
  font-weight: 600;
  font-size: 30px;
  line-height: 125%;
  color: #F9FAFC;
}

.page-subtitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #E43E2B;
}

.text-1 {
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: #F9FAFC;
}

.text-2 {
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #F9FAFC;
}

.card-donativo {
  background: #2F3A4B;
  border-radius: 14px;
}

.btn-donativo {
  min-width: 56px !important;
  height: 56px !important;
  padding: 0px !important;
}

.icon-donativo {
  font-size: 32px;
}

.text-3 {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #FFFFFF;
}

.text-4 {
  font-weight: 400;
  font-size: 10px;
  line-height: 125%;
  color: #FFFFFF;
}

.btn-donativo2 {
  min-width: 40px !important;
  height: 40px !important;
  padding: 0px !important;
}

.icon-donativo2 {
  font-size: 24px;
}

.text-5 {
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;
  color: #F9FAFC;
}
</style>