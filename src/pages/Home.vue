<template>
  <v-container class="box overflow-x-hidden">
    <v-row class="mt-4" justify="center" no-gutters>
      <v-col cols="12">
        <video width="100%" height="230" controls>
          <source src="https://thechangearrive.com/video.mp4" type="video/mp4">
          Dispositivo sem suporte a vídeo!
        </video>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col class="d-flex justify-center py-0">
        <span class="inter page-subtitle" v-text="$trans('// A Mudança Chegou!')">
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center pt-1 pb-0">
        <span class="azeret page-title" v-text="$trans('Faço Parte da mudança!')">
        </span>
      </v-col>
    </v-row>

    <v-row class="px-4 mt-12">
      <v-col cols="6">
        <v-btn class="azeret btn-text" block large color="#CD2027" @click="$router.push('/donativo')" v-text="$trans('Donativo')">
        </v-btn>
      </v-col>

      <v-col cols="6">
        <v-btn class="azeret btn-text" block large color="#2F3A4B" v-text="$trans('Bilhetes')">          
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="px-4 mt-8">
      <v-col cols="8">
        <span class="azeret section-title" v-text="$trans('Line Up')">
        </span>
      </v-col>
      <v-col class="mt-n1 text-right" cols="4">
        <span class="azeret section-link" @click="$router.push('/lineup')" v-text="$trans('Ver todos')">
        </span>
      </v-col>
    </v-row>

    <v-row class="mt-0">
      <v-slide-group
        class="pa-4"
      >
        <v-slide-item 
          v-for="(line,index) in lineup"
          :key="index"
          class="mx-1"

        >
          <v-img
            max-height="215"
            max-width="161"
            :src="getApi + '/images-lineup/' + line.image"
            @click="$router.push('/lineup/' + line.id)"
          ></v-img>
        </v-slide-item>
      </v-slide-group>
    </v-row>
    
    <v-row class="px-4" style="background: #2D3540;">
      <v-col cols="12">
        <p class="inter text-1 mb-0" v-text="$trans('Acreditamos que chegou um momento de mudança')">
        </p>
        <v-row>
          <v-col cols="7">
            <p class="inter text-1" v-text="$trans('para o mundo!')">
            </p>
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <v-img
            max-height="87"
            max-width="118"
            src="../assets/jovens.gif"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-0" style="background: #2D3540;">
      <v-col class="d-flex justify-end pa-0 pb-6">
        <v-img
        max-width="350"
        src="../assets/Lable.png"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="mt-0">
      <v-col class="pa-0" cols="12">
        <v-img
        src="../assets/a_mudanca.png"
        ></v-img>
      </v-col>
    </v-row>

    <v-row style="width: 600px; background-color: #040406;">
      <v-col class="at-container">
        <span class="inter text-2 at-item" v-text="$trans('// Contamos contigo!')">
        </span>
      </v-col>
    </v-row>

    <v-row class="px-4 mt-8">
      <v-col cols="8">
        <span class="azeret section-title" v-text="$trans('Videos')">
        </span>
      </v-col>
      <v-col class="mt-n1 text-right" cols="4">
        <span class="azeret section-link" @click="$router.push('/galeria')" v-text="$trans('Ver todos')">
        </span>      
      </v-col>
    </v-row>

    <v-row class="mt-0">
      <v-slide-group
        class="pa-4"
      >
        <v-slide-item 
          v-for="(video, index) in videos"
          :key="index"
          class="mx-1"
          width="270"
          height="185"
        >

            <v-card @click="$router.push('/galeria/' + video.id)" class="card-video" :style="`background-image: url('${getApi}/images-video/${video.image}; background-size: cover`">
                <div class="contentCard">
                    <div class="descricao">
                        <p class="title mb-1">{{ video.name }}</p>
                        <p class="category mb-0" v-text="$trans('Vídeo')"></p>
                    </div>
                    <img src="/icons/play.svg" class="play">
                </div>
            </v-card>

        </v-slide-item>
      </v-slide-group>
    </v-row>

    <v-row class="mb-2">
      <v-col class="d-flex justify-center" cols="12">
        <v-img
        max-height="176"
        max-width="321"
        src="../assets/como_chegar.png"
        @click="$router.push('/como-chegar')"
        ></v-img>
      </v-col>
    </v-row>

    <v-row style="background-color: #fff;">
      <v-col class="mt-4" cols="12">
        <p class="inter text-3">
          Evento <br> The CHANGE
        </p>

        <v-img
        max-height="52"
        max-width="52"
        src="../assets/ok.gif"
        ></v-img>

        <p class="azeret text-4 mt-4" v-text="$trans('Este evento é organizado pela Associação Rodrigues Pereira, Vitae Fest, Charis e outros que estão a juntar-se a este movimento de evangelização em nome de Jesus e unidade da igreja.')">
        </p>
        
        <p class="azeret text-5 mt-8" v-text="$trans('Organização')">
        </p>

        <v-row>
          <v-col cols="2">
            <v-img
            src="../assets/organizacao_1.png"
            ></v-img>
          </v-col>
          <v-col class="d-flex justify-center align-center ml-2" cols="5">
            <v-img
            src="../assets/organizacao_2.png"
            ></v-img>
          </v-col>
        </v-row>

        <p class="azeret text-5 mt-8" v-text="$trans('Igrejas Organizadoras')">          
        </p>

        <v-slide-group v-model="slideGroup">
          <v-slide-item v-for="(igreja, index) in igrejas" :key="index">
              <v-img
              contain
              max-height="62"
              :src="igreja.src"
              class="mx-2"
              ></v-img>
          </v-slide-item>
        </v-slide-group>

        <p class="azeret text-5 mt-8" v-text="$trans('Apoios')">
        </p>

        <v-slide-group v-model="slideGroup">
          <v-slide-item v-for="(igreja, index) in igrejas" :key="index">
              <v-img
              contain
              max-height="62"
              :src="igreja.src"
              class="mx-2"
              ></v-img>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: 'Home',
    data () {
      return {
        slideGroup: 0,
        lineup: [],
        videos: [],
        igrejas: [
          {src: require("../assets/igrejas/igreja_1.png")},
          {src: require("../assets/igrejas/igreja_2.png")},
          {src: require("../assets/igrejas/igreja_3.png")},
          {src: require("../assets/igrejas/igreja_1.png")},
          {src: require("../assets/igrejas/igreja_2.png")},
          {src: require("../assets/igrejas/igreja_3.png")},
          {src: require("../assets/igrejas/igreja_1.png")},
          {src: require("../assets/igrejas/igreja_2.png")},
          {src: require("../assets/igrejas/igreja_3.png")},
        ],

          isLoadingLineup: true,
          isLoadingVideos: true,
          getApi: process.env.VUE_APP_API
      }
    },
    methods: {
        ...mapActions('lineup', ['lisLineup']),
        ...mapActions('videos', ['listVideos']),
      async loadLineups () {
        this.isLoadingLineup = true

          const lineups = await this.lisLineup()

          if (lineups && lineups.data) {
              this.lineup = lineups.data
          }


        this.isLoadingLineup = false
      },

        async loadVideos () {
            this.isLoadingVideos = true

            const videos = await this.listVideos()

            if (videos && videos.data) {
                this.videos = videos.data
            }


            this.isLoadingVideos = false
        }
    },
    mounted() {
      this.interval = setInterval(() => {
        if(this.slideGroup == this.igrejas.length){
          this.slideGroup = -1;
        }

        this.slideGroup++;
      }, 700)

        this.loadLineups()
        this.loadVideos()
    }
  }
</script>

<style scoped>
.card-video {
    width: 270px;
    height: 185px;
    border-bottom: 4px solid #CD2027;
    border-radius: 8px;
    position: relative;
    margin-bottom: 20px;
}

.coverVideo {
    width: 270px;
    height: 185px;
    position: relative;
}
.contentCard {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: linear-gradient(180deg, rgba(6, 5, 24, 0) 0%, #060518 100%);
}


.contentCard .descricao {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: #FFF;
}

.descricao .title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #F9FAFC;
}

.contentCard .play {
    position: absolute;
    bottom: 12px;
    right: 12px;
}

  .video-slide{
    border-radius: 15px;
    border-bottom: 2px solid red;
  }
  .box{
    height: 100%;
    background-color: #060518;
      padding-bottom: 90px;
  }

  .azeret{
    font-family: 'Azeret Mono';
    font-style: normal;
  }

  .inter{
    font-family: 'Inter';
    font-style: normal;
  }
  .page-title{
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    line-height: 34px;
    color: #FFFBFE;
  }

  .page-subtitle{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFBFE;
  }

  .btn-text{
    text-transform: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
  }

  .section-title{
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFBFE;
  }

  .section-link{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #B1B1B1;
  }

  .text-1{
    font-weight: 500;
    font-size: 44px;
    line-height: 58px;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .text-2{
    font-weight: 600;
    font-size: 44px;
    line-height: 53px;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .at-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	.at-item {
		width:auto;
		animation: anim 5s linear 0s infinite normal none;
	}

	@keyframes anim {		
		0% {
			transform:translateX(100vw);
		}
		100% {
			transform:translateX(-600px);
		}
	}

  .text-3{
    font-weight: 600;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #141414;
  }

  .text-4{
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    font-feature-settings: 'case' on;
    color: #1C2026;
  }

  .text-5{
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #141414;
  }

</style>