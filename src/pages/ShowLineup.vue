<template>
  <v-container class="box">

      <template v-if="isLoading">
          <v-row class="mt-10">
              <v-col
                  cols="12"
                  md="12"
              >
                  <v-skeleton-loader
                        dark
                        v-bind="attrs"
                        type="article, card-avatar"
                  ></v-skeleton-loader>
              </v-col>
          </v-row>

      </template>
      <template v-else>
          <div class="box-inicio mt-0" :style="`background-image: url('${getApi}/images-lineup/${lineup.image}'); margin: -12px !important; display: flex !important`">

              <div class="d-flex flex-column aling-center"
                   style="align-self: end; background: linear-gradient(180deg, rgba(6, 5, 24, 0) 24.94%, #060518 98.5%); padding-top: 50px; width: 100%"
              >
                  <v-col class="px-6" cols="12">
                      <p class="azeret page-title mb-1">
                          {{ lineup.name }}
                      </p>
                      <p class="inter page-subtitle">
                          {{ lineup.category }}
                      </p>
                  </v-col>
              </div>

          </div>

          <v-row class="px-6 mt-10">
              <v-col cols="12">
                  <p class="inter text-1">
                      BIO
                  </p>
                  <p class="inter text-1">
                      {{ lineup.bio }}
                  </p>
              </v-col>
          </v-row>

          <v-row class="mt-2 px-6">
              <v-col cols="12">
                  <p class="inter text-2">
                      Clica em baixo para conseguir o bilhete.
                  </p>
              </v-col>
          </v-row>

          <v-card class="mx-6 px-3 card-donativo" :href="link_donativo" target="_blank">
              <v-row>
                  <v-col cols="3">
                      <div color="#CD2027" class="btn-donativo">
                          <div>04</div>
                          <Div>AGO</Div>
                      </div>
                  </v-col>
                  <v-col cols="7" class="px-0">
                      <p class="mb-0 mt-1 azeret text-3">
                          The Change
                      </p>
                      <p class="mb-0 mt-1 inter text-4">
                          Sábado 17:00
                      </p>
                      <p class="mb-0 mt-1 inter text-4">
                          Estádio da Luz. Lisboa
                      </p>
                  </v-col>
                  <v-col cols="2" class="px-0 d-flex align-center">
                      <v-btn color="rgba(255, 251, 254, 0.2)" class="btn-donativo2">
                          <v-icon color="#fff" class="icon-donativo2">
                              mdi-ticket-confirmation-outline
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

          <iframe width="100%" height="315" :src="lineup.video" type="video/mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


      </template>
  </v-container>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: 'Lineup',
    data () {
      return {
          isLoading: true,
          attrs: {
              class: 'mb-6',
              elevation: 2,
          },
          lineup: null,
          getApi: process.env.VUE_APP_API,
          link_donativo: null
      }
    },
      methods: {
        ...mapActions('lineup', ['showLineup'])
      },

      async mounted() {
        this.isLoading = true

          const lineup = await this.showLineup(this.$route.params.id)
          if (lineup){
            this.lineup = lineup
          } else {

          }

        this.isLoading = false
      }
  }
</script>

<style scoped>
  .box{
    min-height: calc(100vh + 100px);
    background-color: #060518;
  }

  .box-inicio{
      height: 440px;
      background-size: 100%;
  }

  .azeret{
    font-family: 'Azeret Mono';
    font-style: normal;
  }

  .inter{
    font-family: 'Inter';
    font-style: normal;
  }

  .text{
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
  }
  .page-title{
    font-weight: 600;
    font-size: 30px;
    line-height: 125%;
    color: #F9FAFC;
  }

  .page-subtitle{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFF;
  }

  .text-1{
    font-weight: 500;
    font-size: 14px;
    line-height: 125%;
    color: #F9FAFC;
  }

  .text-2{
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #F9FAFC;
  }

  .card-donativo{
    background: #2F3A4B;
    border-radius: 14px;
  }
  
  .btn-donativo{
    min-width: 56px !important;
    height: 56px !important;
    padding: 0px !important;
      text-align: center;
      background-color: #FFF;
  }

  .icon-donativo{
    font-size: 32px;
  }

  .text-3{
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: #FFFFFF;
  }

  .text-4{
    font-weight: 400;
    font-size: 10px;
    line-height: 125%;
    color: #FFFFFF;
  }

  .btn-donativo2{
    min-width: 40px !important;
    height: 40px !important;
    padding: 0px !important;
  }

  .icon-donativo2{
    font-size: 24px;
  }
  
  .text-5{
    font-weight: 400;
    font-size: 20px;
    line-height: 125%;
    color: #F9FAFC;
  }

</style>