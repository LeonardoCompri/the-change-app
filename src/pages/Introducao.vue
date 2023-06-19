<template>
    <v-row class="d-flex justify-space-between container-view" no-gutters>
        <v-col class="d-flex justify-center" cols="12">
            <v-img lazy-src="../assets/logo_change_white.png" max-height="64" max-width="300" contain
                src="../assets/logo_change_white.png"></v-img>
        </v-col>
        <v-col class="mt-12 px-12" cols="12">
            <v-row class="d-flex container-options">
                <div class="option-container">
                    <v-img lazy-src="../assets/ChooseLanguageIcon.png" max-height="42" max-width="42" contain
                        src="../assets/ChooseLanguageIcon.png"></v-img>
                    <p class="text">Choose your language</p>
                </div>
                <v-img lazy-src="../assets/ChevronDownIcon.png" max-height="42" max-width="42" contain
                    src="../assets/ChevronDownIcon.png"></v-img>
            </v-row>
            <v-radio-group v-model="language" column class="">
                <v-row class="option">
                    <div class="option-container">
                        <v-img src="../assets/EnglishIcon.png" max-height="42" max-width="42" contain></v-img>
                        <p class="label-white">English</p>
                    </div>
                    <v-radio dark value="en" class="radio-white" color="white"></v-radio>
                </v-row>
                <v-row class="option">
                    <div class="option-container">
                        <v-img src="../assets/PortugueseIcon.png" max-height="42" max-width="42" contain></v-img>
                        <p class="label-white">Portuguese</p>
                    </div>
                    <v-radio dark value="pt" class="radio-white" color="white"></v-radio>
                </v-row>
            </v-radio-group>
        </v-col>
        <v-col class="mt-2 d-flex justify-center bottom-card" cols="12" no-gutters>
            <v-btn text class="mt-n1 px-0 btn-next" @click="onChooseLanguage()">
                Próximo
            </v-btn>
        </v-col>
    </v-row>
</template>
  
<script>
export default {
    name: 'Introducao',
    data() {
        return {
            language: 'en'
        }
    },
    methods: {
        onChooseLanguage () {
            localStorage.setItem('lang', this.language)
            this.$router.push('/carrossel')
        }
    }
}
</script>
  
<style scoped>
.option-container {
    justify-content: start;
    display: flex;
    gap: 12px;
}

.label-white {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;
    color: #fff;
    align-self: center;
    padding-top: 12px;
}

.radio-white .v-input__icon--outer {
    border-color: white;
}

.radio-white .v-input__icon--inner {
    background-color: white;
}

.radio-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.v-radio__label {
    margin-left: 8px;
    margin-right: 16px;
}

.option {
    justify-content: space-between;
}

.text {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;
    color: #fff;
    align-self: center;
    padding-top: 12px;
}

.container-options {
    justify-content: space-between;
    align-items: center;
}

.btn-next {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
    text-transform: none;
}

.bottom-card {
    background-color: #2D3540;
    border-top-left-radius: 48px;
    border-top-right-radius: 48px;
    justify-content: center;
    align-items: center;
}

.container-view {
    background-color: #060518;
    height: 100%;
    padding-top: 40%
}

.btn-next {}
</style>