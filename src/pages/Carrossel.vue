<template>
    <v-carousel v-model="step" hide-delimiters>
        <v-carousel-item v-for="(item, index) in items" :key="index" :src="item.backgroundImage">
            <v-container fill-height>
                <v-layout column align-center justify-center>
                    <v-img :src="logo" max-height="80"></v-img>
                </v-layout>
                <v-card class="card" outlined>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-text>{{ item.text }}</v-card-text>
                    <v-layout justify-center align-center>
                        <v-btn v-if="step > 0" @click="$router.push('/login')">Saltar</v-btn>
                        <v-carousel-indicators :value="step" :length="items.length"></v-carousel-indicators>
                        <v-btn @click="nextStep" v-if="step < items.length - 1">
                            Seguinte
                        </v-btn>
                    </v-layout>
                </v-card>
            </v-container>
        </v-carousel-item>
    </v-carousel>
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
                    backgroundImage: '../assets/step1Background.png'
                },
                {
                    title: 'Faz parte de um evento transformador!',
                    text: 'Vamos transformar vidas, espalhar amor e esperança, e mostrar ao mundo que a fé pode mover montanhas!',
                    backgroundImage: '../assets/step2Background.png'
                },
                {
                    title: 'Fica atento a todas as novidades',
                    text: 'Junta-te à nossa comunidade e recebe as atualizações mais recentes sobre o evento.',
                    backgroundImage: '../assets/step3Background.png'
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
  
<style scoped>
.card {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 16px;
}
</style>