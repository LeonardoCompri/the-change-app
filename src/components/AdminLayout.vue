<template>
    <v-app>
        <v-app-bar app v-if="showMenu()">
            <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                dark
                v-if="showMenu()"
                color="#2D3540"
        >
            <div style="margin-top: 50px">
                <v-btn text><v-icon @click="drawer = false">mdi-keyboard-backspace</v-icon></v-btn>
            </div>

            <v-avatar
                    color="white"
                    size="40"
                    class="ml-4 mt-4"
            >
                <span class="white--text text-h5">36</span>
            </v-avatar>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>{{ getUser ? getUser.username : 'Sem nome' }}</v-list-item-title>
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
                        <v-list-item-title>Terminar sessão</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
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
        hiddenInRoutes: ['login', 'inicio'],
        drawer: false,
        snackbar: {
            visible: false,
            timeout: 3000,
            message: '',
            color: 'light-blue darken-4',
        },
        items: [
            { title: 'Usuários', icon: 'mdi-account-circle-outline', route: '/admin/users' },
            { title: 'Line Up', icon: 'mdi-format-list-bulleted-type', route: '/admin/lineup' },
            { title: 'Vídeos', icon: 'mdi-youtube', route: '/admin/video' },
            /*{ title: 'Donativo', icon: 'mdi-hand-coin-outline', route: '/home' },
            { title: 'Como chegar?', icon: 'mdi-map-marker', route: '/home' },
            { title: 'Termos e política', icon: 'mdi-information-slab-circle-outline', route: '/home' },*/

        ],
    }),
    methods: {
        showMenu () {
            if (this.hiddenInRoutes.includes(this.$route.name)) return false
            return true
        },
        goToRoute (item) {
            if ('route' in item) this.$router.push(item.route)
        },

        logout () {
            sessionStorage.removeItem("usuario")
            sessionStorage.removeItem("token")
            this.$router.push('/login')
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


</style>