<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h1 class="fonte text-uppercase">Administração</h1>
        </div>
        <v-flex class="text-right">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
          >
            <v-icon>add</v-icon>
            Adicionar
          </v-btn>
        </v-flex>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {

      }
    }
  }
</script>