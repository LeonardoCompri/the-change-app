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

          <video
              :src="video.url"
              controls
          ></video>


      </template>
  </v-container>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: 'video',
    data () {
      return {
          isLoading: true,
          attrs: {
              class: 'mb-6',
              elevation: 2,
          },
          video: null,
          getApi: process.env.VUE_APP_API
      }
    },
      methods: {
        ...mapActions('videos', ['showVideo'])
      },

      async mounted() {
        this.isLoading = true

          const video = await this.showVideo(this.$route.params.id)
          if (video){
            this.video = video
          } else {

          }

        this.isLoading = false
      }
  }
</script>

<style scoped>
video {
    width: 100%;
    height: calc(100vh - 30px);
}
  .box{
    height: 100vh;
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