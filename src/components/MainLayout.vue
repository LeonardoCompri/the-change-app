<template>
    <v-app>

        <template v-if="showTabBar()">
            <v-app-bar
                    :app="!showMenuTitleDegrade()"
                    v-show="showMenu()"
                    :class="getClassMenu()"
                    dark
                    :color="!showMenuTitleDegrade() ? '' : 'transparent'"
                    :absolute="showMenuTitleDegrade()"
                    :elevation="showMenuTitleDegrade() ? 0 : 1"

            >
                <template v-if="showMenuTitleDegrade()">
                    <v-icon dark @click="$router.push('/home')">mdi-arrow-left</v-icon>
                    <v-toolbar-title class="ml-5">{{ capitalizeFirstLetter($route.name) }}</v-toolbar-title>
                </template>
                <template v-else>


                    <v-avatar size="40" color="rgb(205, 32, 39)" v-if="getUser">
                        <template v-if="getUser.photo">
                            <!-- Exibir a foto de perfil -->
                            <img :src="getApi + '/images-profile/' + getUser.photo" alt="Foto de perfil">
                        </template>
                        <template v-else>
                            <!-- Exibir as iniciais do nome -->
                            <span class="avatar-initials white--text text-h5">{{ obterIniciaisNome() }}</span>
                        </template>
                    </v-avatar>
                </template>

                <v-spacer></v-spacer>
                <v-app-bar-nav-icon
                        dark
                        @click="drawer = !drawer"
                ></v-app-bar-nav-icon>

            </v-app-bar>


            <v-navigation-drawer
                    v-model="drawer"
                    fixed
                    temporary
                    dark
                    v-if="showMenu()"
                    width="80%"
                    color="#2D3540"
            >
                <div style="margin-top: 50px">
                    <v-btn text><v-icon @click="drawer = false">mdi-keyboard-backspace</v-icon></v-btn>
                </div>
                <v-avatar size="60" color="rgb(205, 32, 39)" class="ml-4 mt-4" v-if="getUser">
                    <template v-if="getUser.photo">
                        <!-- Exibir a foto de perfil -->
                        <img :src="getApi + '/images-profile/' + getUser.photo" alt="Foto de perfil">
                    </template>
                    <template v-else>
                        <!-- Exibir as iniciais do nome -->
                        <span class="avatar-initials white--text text-h5">{{ obterIniciaisNome() }}</span>
                    </template>
                </v-avatar>




                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{ getUser ? getUser.name : 'Sem nome' }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list
                        dense
                        nav
                >
                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link
                            @click="goToRoute(item)"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>

                    <v-list-item
                            link
                            @click="logout"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ $trans('Terminar sessão') }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>


                <div style="flex: 1; display: flex; margin-top: 50px; margin-left: 15px">
                    <div style="display: flex;width: 80%;">
                        <a class="mr-5" target="_blank" href="https://instagram.com/thechangelisbon?igshid=MjEwN2IyYWYwYw=="><img src="/icons/instagram-colored.svg" width="38px"></a>
                        <a class="mr-5" target="_blank" href="http://www.tiktok.com/@thechangelisbon"><img src="/icons/tiktok-colored.svg" width="38px"></a>
                        <a class="mr-5" target="_blank" href="https://www.facebook.com/thechangelisbon/"><img src="/icons/facebook-colored.svg" width="38px"></a>
                        <a class="mr-5" target="_blank" href="whatsapp://send?text='Venha Fazer parte da Mudança, https://thechangearrive.com'"><img src="/icons/whatsapp-colored.svg" width="38px"></a>
                    </div>
                </div>
            </v-navigation-drawer>
        </template>


        <v-main>
            <router-view></router-view>
            <v-bottom-navigation fixed class="bottomNav" v-if="showFooter()">
                <v-btn @click="$router.push('/home')">
                    <v-icon>mdi-home</v-icon>
                </v-btn>

                <v-btn @click="$router.push('/lineup')">
                    <v-icon>mdi-format-list-bulleted-type</v-icon>
                </v-btn>

                <v-btn @click="$router.push('/profile')">
                    <v-icon>mdi-account-circle-outline</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-main>
        <v-snackbar :color="snackbar.color" v-model="snackbar.visible" :bottom="'bottom'" :right="'right'" :timeout="snackbar.timeout">
            {{ snackbar.message }}
            <template v-slot:action="{ attrs }">
                <v-btn
                        dark
                        text
                        v-bind="attrs"
                        @click="snackbar.visible = false"
                >
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'App',
    data: () => ({
        hiddenInRoutes: ['login', 'inicio', 'carrossel', 'cadastro', 'alterar-palavra-passe', 'verificacao', 'profile-update'],
        showTitleDegrade: ['donativo', 'lineup', 'Lineup', 'como-chegar', 'Galeria', 'galeria'],
        hideFooterInRoutes: ['galeria', 'introducao', 'carrossel', 'login', 'cadastro', 'alterar-palavra-passe', 'verificacao', 'profile-update'],
        drawer: false,
        snackbar: {
            visible: false,
            timeout: 3000,
            message: '',
            color: 'light-blue darken-4',
        },
        items: [
            { title: 'A minha conta', icon: 'mdi-account-circle-outline', route: '/profile' },
            { title: 'Line Up', icon: 'mdi-format-list-bulleted-type', route: '/lineup' },
            { title: 'Bilhetes', icon: 'mdi-ticket-confirmation-outline', route: '/bilhetes' },
            { title: 'Donativo', icon: 'mdi-hand-coin-outline', route: '/donativo' },
            { title: 'Como chegar?', icon: 'mdi-map-marker', route: '/como-chegar' },
            { title: 'Termos e política', icon: 'mdi-information-slab-circle-outline', route: '/termos' },
        ],
        getApi: process.env.VUE_APP_API
    }),
    methods: {
        showMenu () {
            if (this.hiddenInRoutes.includes(this.$route.name)) return false
            return true
        },

        showMenuTitleDegrade () {
            if (this.showTitleDegrade.includes(this.$route.name)) return true
            return false
        },

        showFooter () {
            if (this.hideFooterInRoutes.includes(this.$route.name)) return false
            return true
        },

        showTabBar () {
            if (this.$route.name == "carrossel") return false
            return true
        },

        goToRoute (item) {
            if ('route' in item) this.$router.push(item.route)
        },

        logout () {
            localStorage.removeItem("usuario")
            localStorage.removeItem("token")
            this.$router.push('/login')
        },

        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },


        getClassMenu () {
            if (this.showMenuTitleDegrade()) {
                return 'bgmenuDegrade'
            }

            return 'bgmenu'

        },

        obterIniciaisNome() {
            const nomes = this.getUser.name.split(' '); // Divide o nome em partes
            const iniciais = nomes.map(nome => nome.charAt(0)); // Obtém as iniciais
            return iniciais.join('').toUpperCase(); // Retorna as iniciais em maiúsculas
        }

    },
    mounted() {
        this.$eventHub.on('snackBar', config => {
            this.snackbar.visible = true
            this.snackbar.timeout = config.timeout
            this.snackbar.message = config.message
            this.snackbar.color   = config.color
        })
    },
    computed: {
        ...mapGetters('users', ['getUser'])
    }
};
</script>


<style scoped>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}
@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-o-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .1ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
}


.bgmenu{
    background-color: #060518 !important;
}
.bgmenuDegrade{
    background: linear-gradient(180deg, #060518 3.65%, rgba(6, 5, 24, 0) 100%);
}

.bottomNav {
    background-color: #2F3A4B;
    justify-content: space-around;
    box-shadow: 0px -16px 16px rgba(6, 5, 24, 0.26);
    height: 80px !important;
}

.bottomNav * {
    color: #FFF !important;
}
</style>