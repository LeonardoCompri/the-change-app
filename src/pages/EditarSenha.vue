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
              <p class="text-entrar">{{ $trans('Nova Palavra Passe') }}</p>
              <p class="subTitle">{{ $trans('Escolha uma nova palavra passe que não seja semelhante à anterior.') }}</p>
          </v-col>
      </v-row>

    <v-row class="mt-6 px-5" justify="center" no-gutters>
      <v-col cols="12">
        <p class="text-entrar"></p>
        <v-form>
            <v-text-field
                    outlined
                    :label="$trans('Palavra Passe')"
                    placeholder="**********"
                    prepend-inner-icon="mdi-key-outline"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    @click:append="showPass = !showPass"
                    v-model="user.password"
            ></v-text-field>
            <v-text-field
                    outlined
                    :label="$trans('Confirmar Palavra Passe')"
                    placeholder="**********"
                    prepend-inner-icon="mdi-key-outline"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    @click:append="showPass = !showPass"
                    v-model="user.repassword"
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
              password: null,
              repassword: null
          },
          getApi: process.env.VUE_APP_API
      }
    },
    methods: {
        ...mapActions('users', ['updateProfile']),


        async onUpdate () {

            if (!this.user.password || !this.user.repassword) {
                this.$eventHub.$emit('snackBar', {color: 'error', message: $trans('Preencha todos os campos')})
                return
            }

            if (this.user.password != this.user.repassword) {
                this.$eventHub.$emit('snackBar', {color: 'error', message: $trans('Senhas não conferem')})
                return
            }


            this.isLoading = true
            const form = new FormData();
            const user = JSON.parse(JSON.stringify(this.user))

            for (let property in user) {
                form.append(property, user[property])
            }

            const r = await this.updateProfile(form)
            if (r) {
                this.$eventHub.$emit('snackBar', {color: 'success', message: $trans('Senha editada com sucesso')})
                this.$router.push('/profile')
            } else {
                this.$eventHub.$emit('snackBar', {color: 'error', message: $trans('Erro ao editar senha')})
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


  .subTitle {
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 100;
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