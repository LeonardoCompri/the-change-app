<template>
    <v-container fluid class="container">
        <v-row>
            <v-col cols="12" md="4" class="text-center">
                <v-avatar size="120">
                    <img src="../assets/profile.png" alt="Profile photo">
                </v-avatar>
                <div class="mt-2 name">{{ name }}</div>
                <v-layout class="mt-4 d-flex">
                    <v-btn style="background-color: #CD2027 !important; font-family: 'Azeret Mono'; font-style: normal; text-transform: none;" class="mr-2 button-red flex-grow-1 flex-shrink-1 white--text" @click="openDonation">
                        <v-icon left>mdi-heart</v-icon>
                        Donativo
                    </v-btn>
                    <v-btn style="background-color: #2F3A4B !important; font-family: 'Azeret Mono'; font-style: normal; text-transform: none;" color="gray dark-3" class="button flex-grow-1 flex-shrink-1 white--text" @click="openTickets">
                        <v-icon left>mdi-ticket</v-icon>
                        Bilhetes
                    </v-btn>
                </v-layout>
            </v-col>
            <v-col cols="12" md="8">
                <v-list class="transparent">
                    <v-list-item @click="selectOption(option1)">
                        <v-list-item-avatar style="border-radius: 2px !important;">
                            <v-img src="../assets/close.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ option1.title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ option1.subtitle }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon>{{ option1.icon }}</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item @click="selectOption(option2)">
                        <v-list-item-avatar>
                            <v-img :src="option2.image"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ option2.title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ option2.subtitle }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon>{{ option2.icon }}</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item @click="selectOption(option3)">
                        <v-list-item-avatar>
                            <v-img :src="option3.image"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ option3.title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ option3.subtitle }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon>{{ option3.icon }}</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    name: "Conta",
    data() {
        return {
            profilePhoto: require("../assets/profile.jpg"),
            name: "Ricardo Afonso",
            option1: {
                title: "Editar conta",
                image: require("../assets/edit.png"),
                icon: "mdi-chevron-right"
            },
            option2: {
                title: "Opção 2",
                image: require("../assets/EnglishIcon.png"),
                icon: "mdi-chevron-right"
            },
            option3: {
                title: "Opção 3",
                image: require("../assets/close.png"),
                icon: "mdi-chevron-right"
            },
            backgroundImage: require("../assets/step1Background.png")
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
        }
    },
    mounted() {
        document.body.style.backgroundImage = `url(${this.backgroundImage})`;
        document.body.style.backgroundSize = "cover";
    },
    beforeDestroy() {
        document.body.style.backgroundImage = null;
        document.body.style.backgroundSize = null;
    }
};
</script>
  
<style>
.v-list-item--active {
    background-color: rgba(0, 0, 0, 0.1);
}

.container {
    background: #060518;
    display: flex;
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

</style>