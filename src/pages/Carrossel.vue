<template>
      <div class="contentCaroussel">
          <v-carousel v-model="step" hide-delimiters :show-arrows="false" class="mainCaroussel">
              <v-carousel-item v-for="(item, index) in items" :key="index">
                  <div class="carousel-image" :style="`background-image: url('${item.backgroundImage}')`"></div>
                      <v-layout column align-center justify-center>
                          <v-img :src="logo" max-height="80"></v-img>
                      </v-layout>
                      <v-card class="card" outlined dark>
                          <v-card-title>{{ item.title }}</v-card-title>
                          <v-card-text>{{ item.text }}</v-card-text>


                          <v-layout justify-space-between>
                              <v-btn @click="$router.push('/login')" text>Saltar</v-btn>
                              <ul class="custom-indicators">
                                  <li v-for="(item, index) in items" :key="index" :class="{ 'active': index === step }"></li>
                              </ul>
                              <v-btn @click="nextStep" text>
                                  Seguinte
                              </v-btn>
                          </v-layout>
                      </v-card>
              </v-carousel-item>
          </v-carousel>
      </div>

</template>
  
<script>
export default {
    name: "Carrossel",
    data() {
        return {
            step: 0,
            items: [
                {
                    title: 'Chegou um momento de mudança para o mundo!',
                    text: 'Explora toda a informação sobre o evento THE CHANGE - a mudança chegou!',
                    backgroundImage: '/images/step1Background.png'
                },
                {
                    title: 'Faz parte de um evento transformador!',
                    text: 'Vamos transformar vidas, espalhar amor e esperança, e mostrar ao mundo que a fé pode mover montanhas!',
                    backgroundImage: '/images/step2Background.png'
                },
                {
                    title: 'Fica atento a todas as novidades',
                    text: 'Junta-te à nossa comunidade e recebe as atualizações mais recentes sobre o evento.',
                    backgroundImage: '/images/step3Background.png'
                }
            ],
            logo: '../assets/logo_change.png'
        }
    },
    methods: {
        nextStep() {
            if (this.step < this.items.length - 1) {
                this.step++;
            } else {
                this.$router.push("/login");
            }
        }
    }
};
</script>
  
<style>
.contentCaroussel .card {
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    padding: 47px 48px;
    box-sizing: border-box;
    background: #2D3540;
    border-radius: 48px 48px 0px 0px;
}
.contentCaroussel .mainCaroussel {
    height: 100vh !important;
}


.contentCaroussel .carousel-image {
    height: 100%; /* Define a altura como 100% do pai, no caso, o v-carousel */
    background-size: cover; /* Ajusta a escala da imagem para preencher o espaço disponível */
    background-position: center; /* Centraliza a imagem no elemento */
}


.contentCaroussel .v-image, .contentCaroussel .v-responsive__content {
    height: 100vh !important;
}


.contentCaroussel .custom-indicators {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.contentCaroussel .custom-indicators li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
}

.contentCaroussel .custom-indicators li.active {
    background-color: #f00;
}
</style>