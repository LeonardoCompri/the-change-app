<template>
  <v-app>
    <!-- <v-app-bar app v-show="false">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="showMenu()"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn
        text
        target="_blank"
        @click="$router.push('/registrar')"
      >
        <span class="mr-2">Criar conta</span>
      </v-btn>
    </v-app-bar> -->

    <!-- <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
      v-if="showMenu()"
    >
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
              <v-icon>power_settings_new</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer> -->

    <v-main>
      <router-view></router-view>
    </v-main>
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
        { title: 'Home', icon: 'dashboard', route: '/admin' },
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
        this.$router.push('/admin/login')
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


<style>
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
