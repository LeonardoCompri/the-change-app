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
                        type="card-avatar"
                  ></v-skeleton-loader>
              </v-col>
          </v-row>

      </template>
      <template v-else>
          <div class="box-inicio mt-15">

              <v-row>
                  <v-col cols="12" md="12" v-for="line in videos">
                    <v-card @click="$router.push('/galeria/' + line.id)" class="card-lineup" :style="`background-image: url('${getApi}/images-video/${line.image}; background-size: cover`">
                        <div class="contentCard">
                            <div class="descricao">
                                <p class="title mb-1">{{ line.name }}</p>
                                <p class="category mb-0">{{ $trans('Vídeo') }}</p>
                            </div>
                            
                            <img src="/icons/play.svg" class="play">
                        </div>
                    </v-card>
                  </v-col>
              </v-row>


          </div>

      </template>
  </v-container>
</template>

<script>
  import {mapActions} from "vuex";
  import dayjs from 'dayjs';
  export default {
    name: 'Lineup',
    data () {
      return {
          isLoading: true,
          attrs: {
              class: 'mb-6',
              elevation: 2,
          },
          videos: null,
          getApi: process.env.VUE_APP_API,
          link_donativo: null,
      }
    },
      methods: {
        ...mapActions('videos', ['listVideos']),

          getFormattedTime(datetimeString) {
              const time = dayjs(datetimeString).format('HH[H]');
              return time;
          }
      },

      async mounted() {
        this.isLoading = true

          const videos = await this.listVideos({all: true})
          if (videos){
            this.videos = videos
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

  .contentCard {
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background: linear-gradient(180deg, rgba(6, 5, 24, 0) 0%, #060518 100%);
  }

  .contentCard .play {
      position: absolute;
      bottom: 12px;
      right: 12px;
  }

  .horario {
      position: absolute;
      top: 16px;
      left: 20px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #F9FAFC;
  }

  .contentCard .descricao {
      position: absolute;
      bottom: 10px;
      left: 20px;
  }

  .descricao .title {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      color: #F9FAFC;
  }


  .descricao .category {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: #F9FAFC;
  }

  .card-lineup {
      border-bottom: 4px solid #CD2027;
      border-radius: 8px;
      position: relative;
      height: 175px;
      margin-bottom: 20px;
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