<template>
  <v-app>
      <template v-if="isRouteInAdminPanel">
          <!-- Template para o painel administrativo -->
          <AdminLayout>
              <router-view></router-view>
          </AdminLayout>
      </template>
      <template v-else>
          <!-- Template para outras rotas -->
          <MainLayout>
              <router-view></router-view>
          </MainLayout>
      </template>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import MainLayout from "./components/MainLayout.vue";
  import AdminLayout from "./components/AdminLayout.vue";
  export default {
      components: {
          MainLayout,
          AdminLayout
      },
    name: 'App',
    computed: {
        isRouteInAdminPanel() {
            console.log(this.$route.path.startsWith('/admin'))
            return this.$route.path.startsWith('/admin');
        }
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


  .bgmenu{
      background-color: #060518 !important;
  }
</style>
