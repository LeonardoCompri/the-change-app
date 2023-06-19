<template>
    <v-container>
        <v-row>
            <v-col md="12" cols="12" class="d-flex justify-space-between">
                <h2>Usuários</h2>
            </v-col>

            <v-col md="12">
                <v-card class="bg-transparent-opacity">
                    <v-data-table
                            :headers="headers"
                            :items="Users"
                            :items-per-page="10"
                            class="elevation-0 bg-transparent"
                            hide-default-footer
                            :footer-props="{
                          'items-per-page-options': [10, 20, 30, 40, 50, 100],
                          'itemsPerPageText': 'Itens por página',
                        }"

                            :server-items-length="totalUsers"

                            :loading="isLoading"
                            :options.sync="optionsDataUsers"
                            no-data-text="Nenhum usuário cadastrado"
                    >
                    </v-data-table>
                </v-card>
            </v-col>
            <v-col md="12" cols="12">
              <div class="text-center mt-10">
                  <v-pagination
                      v-model="page"
                      :length="last_page"
                      circle
                      @input="onLoad"
                      :disabled="isLoading"
                  ></v-pagination>
              </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'



export default {
    components: {},
    data() {
        return {
            page: 1,
            totalUsers: null,
            isLoading: true,
            Users: [],
            headers: [
                {
                    text: 'Nome',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Email',
                    align: 'start',
                    sortable: false,
                    value: 'email',
                },
                {
                    text: 'Criado em',
                    align: 'start',
                    sortable: false,
                    value: 'created_at',
                },
            ],

            optionsDataUsers: {
                itemsPerPage: 10
            },
        }
    },

    methods: {
        ...mapActions('users', ['lisUsers']),
        async onLoad(page = 1, itemsPerPage = 10) {
            this.page = page
            this.isLoading = true
            let filters = {
                page: page,
                itemsPerPage
            }
            const Users = await this.lisUsers(filters)
            this.Users = Users.data
            this.last_page = Users.last_page
            this.totalUsers = Users.total
            this.isLoading = false
        },
    },

    async mounted() {
        this.onLoad()
    },

    computed: {
        ...mapGetters('users', ['getUser']),
    },

    watch: {
        optionsDataUsers: {
            handler () {
                this.onLoad(this.optionsDataUsers.page, this.optionsDataUsers.itemsPerPage)
            },
            deep: true,
        },
    }
}
</script>