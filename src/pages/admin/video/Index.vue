<template>
    <v-container>
        <v-row>
            <v-col md="12" cols="12" class="d-flex justify-space-between">
                <h2>Vídeos</h2>
                <v-btn color="primary" @click="dialogAdd = true">Adicionar</v-btn>
            </v-col>

            <v-col md="12">
                <v-card class="bg-transparent-opacity">
                    <v-data-table
                            :headers="headers"
                            :items="videos"
                            :items-per-page="10"
                            class="elevation-0 bg-transparent"
                            hide-default-footer
                            :footer-props="{
                          'items-per-page-options': [10, 20, 30, 40, 50, 100],
                          'itemsPerPageText': 'Itens por página',
                        }"

                            :server-items-length="totalvideos"

                            :loading="isLoading"
                            :options.sync="optionsDatavideos"
                            no-data-text="Nenhum vídeo cadastrado"
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
                    Adicionar video
                </v-card-title>
                <v-card-text>
                    <v-row class="mt-5">
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="video.name"
                                placeholder="Nome do artista"
                                label="Nome"
                                outlined
                            >
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" md="12">
                            <v-text-field
                                    v-model="video.url"
                                    placeholder="Link do video"
                                    label="Video"
                                    outlined
                            >
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" md="12">
                            <v-file-input
                                    v-model="video.image"
                                    placeholder="Imagem do vídeo"
                                    label="Imagem"
                                    outlined
                            >
                            </v-file-input>
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
            totalvideos: null,
            isLoading: true,
            isLoadingStore: false,
            last_page: 1,
            videos: [],
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
            optionsDatavideos: {
                itemsPerPage: 10
            },

            video: {
                name: null,
                url: null,
                image: null
            },

            textFieldProps: {
                outlined: true,
                placeholder: "Data e hora do evento"
            }
        }
    },

    methods: {
        ...mapActions('videos', ['listVideos', 'storeVideo']),
        async onLoad(page = 1, itemsPerPage = 10) {
            this.page = page
            this.isLoading = true
            let filters = {
                page: page,
                itemsPerPage
            }
            const videos = await this.listVideos(filters)
            this.videos = videos.data
            this.last_page = videos.last_page
            this.totalvideos = videos.total
            this.isLoading = false
        },

        async onSend () {
            const form = new FormData();
            this.isLoadingStore = true
            if (this.video) {
                const video = JSON.parse(JSON.stringify(this.video))
                const form = new FormData();
                video.image = this.video.image
                for (let property in video) {
                    form.append(property, video[property])
                }


                const r = await this.storeVideo(form)
                if (r) {
                    this.$eventHub.$emit('snackBar', {color: 'success', message: 'Video cadastrado com sucesso'})
                    this.video= {
                        name: null,
                        url: null,
                        image: null
                    }
                    this.dialogAdd = false
                    this.onLoad()
                } else {
                    this.$eventHub.$emit('snackBar', {color: 'error', message: 'Erro ao cadastrar vídeo'})
                }
            }

            this.isLoadingStore = false
        }
    },

    async mounted() {
        this.onLoad()
    },

    computed: {
        ...mapGetters('videos', ['getUser']),
    },

    watch: {
        optionsDatavideos: {
            handler () {
                this.onLoad(this.optionsDatavideos.page, this.optionsDatavideos.itemsPerPage)
            },
            deep: true,
        },
    }
}
</script>