<template>
    <v-container class="box">
        <v-row>
            <v-col cols="12" class="text-center">
                <v-avatar size="120">
                    <v-avatar size="120" color="rgb(205, 32, 39)">
                        <template v-if="getUser.photo">
                            <!-- Exibir a foto de perfil -->
                            <img :src="getApi + '/images-profile/' + getUser.photo" alt="Foto de perfil">
                        </template>
                        <template v-else>
                            <!-- Exibir as iniciais do nome -->
                            <span class="avatar-initials white--text text-h5">{{ obterIniciaisNome() }}</span>
                        </template>
                    </v-avatar>
                </v-avatar>
                <div class="mt-2 name">{{ getUser.name }}</div>
                <v-layout class="mt-4 d-flex">
                    <v-btn
                        style="background-color: #CD2027 !important; font-family: 'Azeret Mono'; font-style: normal; text-transform: none;"
                        class="mr-2 button-red flex-grow-1 flex-shrink-1 white--text" @click="openDonation">
                        <v-icon left>mdi-heart</v-icon>
                        <span v-text="$trans('Donativo')"></span>
                    </v-btn>
                    <v-btn
                        style="background-color: #2F3A4B !important; font-family: 'Azeret Mono'; font-style: normal; text-transform: none;"
                        color="gray dark-3" class="button flex-grow-1 flex-shrink-1 white--text" @click="openTickets">
                        <v-icon left>mdi-ticket</v-icon>
                        <span v-text="$trans('Bilhetes')"></span>
                    </v-btn>
                </v-layout>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-card class="card-1 pb-4">
                    <v-card-title class="azeret title-card-1" v-text="$trans('Queres aceitar Jesus como teu senhor e salvador?')">
                    </v-card-title>

                    <v-row class="px-4">
                        <v-col cols="8" v-if="!aceitouJesus">
                            <v-btn text class="responder-card-1 px-0" @click="dialog = true">
                                <span v-text="$trans('Responder')"></span>
                                <v-icon color="#CD2027" size="20" class="mt-1 ml-2">mdi-chevron-right-circle-outline</v-icon>
                            </v-btn>
                        </v-col>

                        <v-col v-else>
                            <p class="azeret sim">
                                SIM
                            </p>
                        </v-col>

                        <v-col cols="4" class="mt-n12">
                            <v-img max-height="80" max-width="80" src="../assets/praying.gif"></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" persistent max-width="90%">
            <v-card>
                <v-card-title class="azeret title-dialog" v-text="$trans('Queres aceitar Jesus como teu senhor e salvador?')">
                </v-card-title>
                <v-card-text class="mt-4">
                    <v-btn class="azeret btn-nao" block x-large @click="dialog = false" v-text="$trans('Não')">
                    </v-btn>
                    <v-btn class="azeret btn-sim mt-2" block x-large @click="dialog = false; aceitouJesus = true" v-text="$trans('Sim')">
                    </v-btn>

                    <v-row>
                        <v-col class="d-flex justify-center">
                            <v-img class="mt-2" style="" max-height="80" max-width="80" src="../assets/praying.gif"></v-img>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-row>
            <v-col cols="12">
                <v-card class="card-2 pb-4">
                    <v-card-title class="azeret title-card-2" v-text="$trans('Se já Aceitaste Jesus')">
                    </v-card-title>

                    <v-card-subtitle class="inter subtitle-card" v-text="$trans('Queres re-dedicar a tua vida a Jesus, como o teu senhor e salvador?')">
                    </v-card-subtitle>

                    <v-row class="px-4">
                        <v-col v-if="aceitouJesus">
                            <p class="azeret sim2" v-text="$trans('SIM')">
                            </p>
                        </v-col>
                        
                        <v-col v-else cols="offset-8"></v-col>
                        
                        <v-col cols="4" class="mt-n12">
                            <v-img max-height="80" max-width="80" src="../assets/ok.gif"></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="mb-8">
            <v-col cols="12" md="8">
                <v-list class="transparent">

                    <v-list-item @click="$router.push('/profile-update')">
                        <v-list-item-avatar style="border-radius: 2px !important;">
                            <v-img src="../assets/user.svg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="azeret" style="color:#fff">
                            <v-list-item-title>{{ $trans("Editar Conta") }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon color="#fff">mdi-pencil-outline</v-icon>
                        </v-list-item-action>
                    </v-list-item>

                    <v-list-item @click="$router.push('/profile-update-pass')">
                        <v-list-item-avatar style="border-radius: 2px !important;">
                            <v-img src="../assets/password.svg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="azeret" style="color:#fff">
                            <v-list-item-title>{{ $trans("Alterar Palavra Passe") }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon color="#fff">mdi-pencil-outline</v-icon>
                        </v-list-item-action>
                    </v-list-item>

                    <!--<v-list-item>
                        <v-list-item-avatar style="border-radius: 2px !important;">
                            <v-img src="../assets/world.svg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="azeret" style="color:#fff">
                            <v-list-item-title>{{ $trans("Escolher idioma") }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon color="#fff">mdi-pencil-outline</v-icon>
                        </v-list-item-action>
                    </v-list-item>-->

                    <v-list-item @click="logout()">
                        <v-list-item-avatar style="border-radius: 2px !important;">
                            <v-img src="../assets/close.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="azeret" style="color:#fff">
                            <v-list-item-title>{{ $trans("Terminar sessão") }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>

                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import {mapGetters} from "vuex";

export default {
    name: "Conta",
    data() {
        return {
            profilePhoto: require("../assets/profile.png"),
            backgroundImage: require("../assets/step1Background.png"),
            dialog: false,
            aceitouJesus: false,
            getApi: process.env.VUE_APP_API
        };
    },
    methods: {
        openDonation() {
            // implementar ação para abrir a página de donativo
        },
        openTickets() {
            // implementar ação para abrir a página de bilhetes
        },
        selectOption(item) {
            // implementar ação para selecionar a opção clicada
        },
        logout(){
            sessionStorage.removeItem("usuario")
            sessionStorage.removeItem("token")
            this.$router.push('/login')
        },

        obterIniciaisNome() {
            const nomes = this.getUser.name.split(' '); // Divide o nome em partes
            const iniciais = nomes.map(nome => nome.charAt(0)); // Obtém as iniciais
            return iniciais.join('').toUpperCase(); // Retorna as iniciais em maiúsculas
        }
    },
    mounted() {
        document.body.style.backgroundImage = `url(${this.backgroundImage})`;
        document.body.style.backgroundSize = "cover";
    },
    beforeDestroy() {
        document.body.style.backgroundImage = null;
        document.body.style.backgroundSize = null;
    },

    computed: {
        ...mapGetters('users', ['getUser']),
    },
};
</script>
  
<style scoped>
.v-list-item--active {
    background-color: rgba(0, 0, 0, 0.1);
}

.box {
    background: #060518;
    height: 100vh;
    background-image: url("../assets/backgroundAccount.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.name {
    font-family: 'Azeret Mono';
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0px;
    color: #fff;
}

.button {
    color: white;
    background: #CD2027;
}

.button-dark {
    color: white;
    background: #2F3A4B;
}

.azeret {
    font-family: 'Azeret Mono';
    font-style: normal;
}

.inter {
    font-family: 'Inter';
    font-style: normal;
}

.card-1 {
    background-color: rgba(218, 218, 218, 1);
    border: 2px solid #2F3A4B;
    border-radius: 16px;
}

.card-2 {
    background-color: #CD2027;
    border: 2px solid #2F3A4B;
    border-radius: 16px;
}

.title-card-1 {
    word-break: break-word;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #1C2026;
}

.title-card-2 {
    word-break: break-word;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #fff;
}

.subtitle-card {
    word-break: break-word;
    width: 65%;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #fff !important;
}

.responder-card-1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #CD2027;
}

.title-dialog{
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #1C2026;
    word-break: break-word;
}

.btn-nao{
    background: #2F3A4B !important;
    border-radius: 4px;
    color: #fff;
}

.btn-sim{
    background: #CD2027 !important;
    border-radius: 4px;
    color: #fff;
}

.sim{
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #CD2027;
}

.sim2{
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
}
</style>