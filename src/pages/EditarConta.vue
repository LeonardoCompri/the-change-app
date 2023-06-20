<template>
  <v-container>
    <v-row class="mt-2">
      <v-col class="px-8" cols="12" no-gutters>
        <v-icon @click="$router.push('/profile')">
          mdi-arrow-left
        </v-icon>
      </v-col>
    </v-row>
      <v-row class="mt-6 px-5">
          <v-col cols="12">
              <p class="text-entrar">Editar conta</p>
          </v-col>
      </v-row>

    <v-row class="mt-6 px-5" justify="center" no-gutters>
      <v-col cols="12">


          <v-row>
              <v-col cols="12 mb-5">
                  <v-avatar size="56" color="rgb(205, 32, 39)">
                      <template v-if="getUser.photo">
                          <!-- Exibir a foto de perfil -->
                          <img :src="getApi + '/images-profile/' + getUser.photo" alt="Foto de perfil">
                      </template>
                      <template v-else>
                          <!-- Exibir as iniciais do nome -->
                          <span class="avatar-initials white--text text-h5">{{ obterIniciaisNome() }}</span>
                      </template>
                  </v-avatar>

                  <v-btn text class="ml-2" @click="onClickUpdatePhoto">Alterar Foto de Perfil</v-btn>
                  <input @change="onSelectedPhoto" type="file" hidden ref="inputPhoto" accept="image/*" >
              </v-col>
          </v-row>
        <v-form>
          <v-text-field
            outlined
            label="Nome Completo"
            placeholder="Nome Completo"
            prepend-inner-icon="mdi-account-outline"
            v-model="user.name"
          ></v-text-field>
          <v-text-field
            outlined
            label="Email"
            placeholder="abc@email.com"
            prepend-inner-icon="mdi-email-outline"
            v-model="user.email"
          ></v-text-field>
  
          <v-btn class="btn-enviar pa-6 mt-4" block color="#CD2027" @click="onUpdate" :loading="isLoading" :disabled="isLoading" v-text="$trans('Confirmar Alterações')">
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'Cadastro',
    data () {
      return {
          showPass: false,
          isLoading: false,
          user: {
              name: null,
              email: null,
              photo: null
          },
          getApi: process.env.VUE_APP_API
      }
    },
    methods: {
        ...mapActions('users', ['updateProfile']),


        async onUpdate () {
            this.isLoading = true
            const form = new FormData();
            const user = JSON.parse(JSON.stringify(this.user))
            user.photo = this.user.photo

            for (let property in user) {
                form.append(property, user[property])
            }

            const r = await this.updateProfile(form)
            if (r) {
                this.$eventHub.$emit('snackBar', {color: 'success', message: 'Perfil editado com sucesso'})
                this.$router.push('/profile')
            } else {
                this.$eventHub.$emit('snackBar', {color: 'error', message: 'Erro ao editar perfil'})
            }
            this.isLoading = false
        },

        onClickUpdatePhoto () {
          this.$refs.inputPhoto.click()
        },

        onSelectedPhoto (evt) {
          this.user.photo = evt.target.files[0]
        },

        obterIniciaisNome() {
            const nomes = this.getUser.name.split(' '); // Divide o nome em partes
            const iniciais = nomes.map(nome => nome.charAt(0)); // Obtém as iniciais
            return iniciais.join('').toUpperCase(); // Retorna as iniciais em maiúsculas
        }
    },

      mounted() {
          this.user.name = this.getUser.name
          this.user.email = this.getUser.email

      },

      computed: {
          ...mapGetters('users', ['getUser']),
      },
  }
</script>

<style scoped>
  .text-entrar{
    font-family: 'Azeret Mono';
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0px;
    color: #1C2026;
  }

  .btn-forgot{
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0px;
    color: #120D26;
  }

  button{
    text-transform: none !important;
  }
  .btn-enviar{
    font-family: 'Azeret Mono';
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    color: #fff;
    border-radius: 4px;
  }

  .text-registar{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
  }
  .btn-registrar{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    color: #5669FF;
    text-transform: none;
  }

</style>