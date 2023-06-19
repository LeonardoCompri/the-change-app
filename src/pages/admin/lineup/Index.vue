<template>
    <v-container>
        <v-row>
            <v-col md="12" cols="12" class="d-flex justify-space-between">
                <h2>Lineup</h2>
                <v-btn color="primary" @click="dialogAdd = true">Adicionar</v-btn>
            </v-col>

            <v-col md="12">
                <v-card class="bg-transparent-opacity">
                    <v-data-table
                            :headers="headers"
                            :items="lineups"
                            :items-per-page="10"
                            class="elevation-0 bg-transparent"
                            hide-default-footer
                            :footer-props="{
                          'items-per-page-options': [10, 20, 30, 40, 50, 100],
                          'itemsPerPageText': 'Itens por página',
                        }"

                            :server-items-length="totallineups"

                            :loading="isLoading"
                            :options.sync="optionsDatalineups"
                            no-data-text="Nenhum linup cadastrado"
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



        <v-dialog
                v-model="dialogAdd"
                persistent
                max-width="800"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Adicionar lineup
                </v-card-title>
                <v-card-text>
                    <v-row class="mt-5">
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="lineup.name"
                                placeholder="Nome do artista"
                                label="Nome"
                                outlined
                            >
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" md="12">
                            <v-text-field
                                    v-model="lineup.category"
                                    placeholder="Categoria"
                                    label="Categoria"
                                    outlined
                            >
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" md="12">
                            <v-datetime-picker
                                    v-model="lineup.date"
                                    :text-field-props="textFieldProps"
                                    label="Data"
                                    dateFormat="yyyy-MM-dd"
                            ></v-datetime-picker>
                        </v-col>


                        <v-col cols="12" md="12">
                            <v-text-field
                                    v-model="lineup.video"
                                    placeholder="Link do video"
                                    label="Video"
                                    outlined
                            >
                            </v-text-field>
                        </v-col>


                        <v-col cols="12" md="12">
                            <v-file-input
                                  v-model="lineup.image"
                                  placeholder="Imagem do artista"
                                  label="Imagem"
                                  outlined
                            >
                            </v-file-input>
                        </v-col>


                        <v-col cols="12" md="12">
                            <v-textarea
                                    v-model="lineup.bio"
                                    placeholder="Bio"
                                    label="Bio"
                                    outlined
                            >
                            </v-textarea>
                        </v-col>

                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="dialogAdd = false"
                            :disabled="isLoadingStore"
                            :loading="isLoadingStore"
                    >
                        Fechar
                    </v-btn>
                    <v-btn
                            color="primary"
                            @click="onSend"
                            :disabled="isLoadingStore"
                            :loading="isLoadingStore"
                    >
                        Inserir
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import dayjs from "dayjs";



export default {
    components: {},
    data() {
        return {
            page: 1,
            totallineups: null,
            isLoading: true,
            isLoadingStore: false,
            last_page: 1,
            lineups: [],
            headers: [
                {
                    text: 'Nome',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Criado em',
                    align: 'start',
                    sortable: false,
                    value: 'created_at',
                },
            ],
            dialogAdd: false,
            optionsDatalineups: {
                itemsPerPage: 10
            },

            lineup: {
                name: null,
                category: null,
                bio: null,
                date: null,
                image: null,
                video: null
            },

            textFieldProps: {
                outlined: true,
                placeholder: "Data e hora do evento"
            }
        }
    },

    methods: {
        ...mapActions('lineup', ['lisLineup', 'storeLineup']),
        async onLoad(page = 1, itemsPerPage = 10) {
            this.page = page
            this.isLoading = true
            let filters = {
                page: page,
                itemsPerPage
            }
            const lineups = await this.lisLineup(filters)
            this.lineups = lineups.data
            this.last_page = lineups.last_page
            this.totallineups = lineups.total
            this.isLoading = false
        },

        async onSend () {
            const form = new FormData();
            this.isLoadingStore = true
            if (this.lineup) {
                const lineup = JSON.parse(JSON.stringify(this.lineup))
                lineup.date = dayjs(lineup.date).format('YYYY-MM-DD HH:mm:ss')
                lineup.image = this.lineup.image
                for (let property in lineup) {
                    form.append(property, lineup[property])
                }

                const r = await this.storeLineup(form)
                if (r) {
                    this.$eventHub.$emit('snackBar', {color: 'success', message: 'Lineup cadastrado com sucesso'})
                    this.lineup= {
                        name: null,
                        category: null,
                        bio: null,
                        date: null,
                        image: null,
                        video: null
                    }
                    this.dialogAdd = false
                    this.onLoad()
                } else {
                    this.$eventHub.$emit('snackBar', {color: 'error', message: 'Erro ao cadastrar usuário'})
                }
            }

            this.isLoadingStore = false
        }
    },

    async mounted() {
        this.onLoad()
    },

    computed: {
        ...mapGetters('lineups', ['getUser']),
    },

    watch: {
        optionsDatalineups: {
            handler () {
                this.onLoad(this.optionsDatalineups.page, this.optionsDatalineups.itemsPerPage)
            },
            deep: true,
        },
    }
}
</script>