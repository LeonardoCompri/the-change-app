<template>
  <v-container class="box overflow-x-hidden pt-0 pb-8">
      <div class="box-inicio mt-0" :style="`margin: -12px !important; display: flex !important`">

          <div class="d-flex flex-column aling-center"
               style="align-self: end; background: linear-gradient(180deg, rgba(6, 5, 24, 0) 24.94%, #060518 98.5%); padding-top: 50px; width: 100%"
          >
              <v-col class="px-6" cols="12">
                  <p class="azeret page-title mb-1" v-text="$trans('Como Chegar ao Estádio da luz')">                      
                  </p>
              </v-col>
          </div>

      </div>
    
    <v-row class="px-6 mt-0">
      <v-col cols="12">
        <p class="inter text-1" v-text="$trans('Existem diversas formas para vir ao Estádio do Sport Lisboa e Benfica. Conheça as regras de comportamento no Complexo Desportivo.')">
        </p>
      </v-col>
    </v-row>
  
    <v-row class="px-8 justify-center">
      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="2">
                <v-icon class="px-0" color="#141414">mdi-bus</v-icon>
              </v-col>
              <v-col cols="10">
                <span class="header-text" v-text="$trans('Autocarros')"></span>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-img
              max-width="184"
              src="../assets/carris.png"
              ></v-img>
            </v-row>
            
            <v-row>
              <v-col cols="12">
                <span class="azeret section-text" v-text="$trans('Estrada da Luz')">
                </span>
              </v-col>
            </v-row>
            
            <v-row class="mt-0">
              <v-col cols="12" class="ma-0 pa-0">
                <v-list flat>
                  <v-list-item-group
                    color="primary"
                  >
                    <v-list-item
                      v-for="(item,index) in list1"
                      :key="index"
                      class="py-1"
                    >
                      <v-row style="height: 80px">
                        <v-col cols="2">
                          <v-btn
                            elevation="2"
                            icon
                            class="btn-list"
                            v-text="item.num"
                          ></v-btn>
                        </v-col>
                        <v-col cols="10">
                          <p v-text="item.text" class="azeret text-list-item"></p>
                        </v-col>
                      </v-row>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <span class="azeret section-text" v-text="$trans('Av. Eusébio da Silva Ferreira (2.ª circular)')">
                </span>
              </v-col>
            </v-row>
            
            <v-row class="mt-0">
              <v-col cols="12" class="ma-0 pa-0">
                <v-list flat>
                  <v-list-item-group
                    color="primary"
                  >
                    <v-list-item
                      v-for="(item,index) in list2"
                      :key="index"
                      class="py-1"
                    >
                      <v-row style="height: 80px">
                        <v-col cols="2">
                          <v-btn
                            elevation="2"
                            icon
                            class="btn-list"
                            v-text="item.num"
                          ></v-btn>
                        </v-col>
                        <v-col cols="10">
                          <p v-text="item.text" class="azeret text-list-item"></p>
                        </v-col>
                      </v-row>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <span class="azeret section-text" v-text="$trans('Estação do Colégio Militar')">
                </span>
              </v-col>
            </v-row>
            
            <v-row class="mt-0">
              <v-col cols="12" class="ma-0 pa-0">
                <v-list flat>
                  <v-list-item-group
                    color="primary"
                  >
                    <v-list-item
                      v-for="(item,index) in list3"
                      :key="index"
                      class="py-1"
                    >
                      <v-row style="height: 80px">
                        <v-col cols="2">
                          <v-btn
                            elevation="2"
                            icon
                            class="btn-list"
                            v-text="item.num"
                          ></v-btn>
                        </v-col>
                        <v-col cols="10">
                          <p v-text="item.text" class="azeret text-list-item"></p>
                        </v-col>
                      </v-row>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>

            <v-row class="pl-4">
              <v-img
              max-width="84"
              src="../assets/RL.png"
              ></v-img>
            </v-row>

            <v-row>
              <v-col cols="12">
                <span class="azeret section-text" v-text="$trans('Estação do Colégio Militar')">
                </span>
              </v-col>
            </v-row>
            
            <v-row class="mt-0">
              <v-col cols="12" class="ma-0 pa-0">
                <v-list flat>
                  <v-list-item-group
                    color="primary"
                  >
                    <v-list-item
                      v-for="(item,index) in list4"
                      :key="index"
                      class="py-1"
                    >
                      <v-row style="height: 80px">
                        <v-col cols="2">
                          <v-btn
                            elevation="2"
                            icon
                            class="btn-list"
                            v-text="item.num"
                          ></v-btn>
                        </v-col>
                        <v-col cols="10">
                          <p v-text="item.text" class="azeret text-list-item"></p>
                        </v-col>
                      </v-row>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>

            <v-row class="pl-4">
              <v-img
              max-width="128"
              src="../assets/LT.png"
              ></v-img>
            </v-row>

            <v-row>
              <v-col cols="12">
                <span class="azeret section-text" v-text="$trans('Estação do Colégio Militar')">
                </span>
              </v-col>
            </v-row>
            
            <v-row class="mt-0">
              <v-col cols="12" class="ma-0 pa-0">
                <v-list flat>
                  <v-list-item-group
                    color="primary"
                  >
                    <v-list-item
                      v-for="(item,index) in list5"
                      :key="index"
                      class="py-1"
                    >
                      <v-row style="height: 80px">
                        <v-col cols="2">
                          <v-btn
                            elevation="2"
                            icon
                            class="btn-list2"
                            v-text="item.num"
                          ></v-btn>
                        </v-col>
                        <v-col cols="10">
                          <p v-text="item.text" class="azeret text-list-item"></p>
                        </v-col>
                      </v-row>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>

          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="2">
                <v-icon class="px-0" color="#141414">mdi-train</v-icon>
              </v-col>
              <v-col cols="10">
                <span class="header-text" v-text="$trans('Comboios')"></span>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="mt-1 pl-4">
              <v-img
              max-width="100"
              src="../assets/comboio.svg"
              ></v-img>
            </v-row>
            
            <v-row>
              <v-col cols="12">
                <span class="azeret section-text" v-text="$trans('Estações pŕoximas')">
                </span>
              </v-col>
            </v-row>
            
            <v-row class="mt-0">
              <v-col cols="12" class="ma-0 pa-0">
                <ul class="azeret">
                  <li v-text="$trans('Benfica, Sete-Rios')"></li>
                </ul>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="2">
                <v-icon class="px-0" color="#141414">mdi-train-variant</v-icon>
              </v-col>
              <v-col cols="10">
                <span class="header-text" v-text="$trans('Metro')"></span>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="mt-1 pl-4">
              <v-img
              max-width="50"
              src="../assets/metro.svg"
              ></v-img>
            </v-row>
            
            <v-row>
              <v-col cols="12">
                <span class="azeret section-text" v-text="$trans('Estações pŕoximas')">
                </span>
              </v-col>
            </v-row>
            
            <v-row class="mt-0">
              <v-col cols="12" class="ma-0 pa-0">
                <ul class="azeret">
                  <li v-text="$trans('Linha Azul - Colégio-Militar/Luz, Altos-dos-Moinhos')"></li>
                </ul>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    
  </v-container>
</template>

<script>
  export default {
    name: 'ComoChegar',
    data () {
      return {
        list1: [
          {num: 3, text: "Charneca/Bairro de Santa Cruz"},
          {num: 726, text: "Sapadores/Pontinha"},
          {num: 767, text: "C. Mártires da Pátria/Est. Damaia"},
          {num: 768, text: "Cid. Universitária/Qta. Olival"},
        ],
        list2: [
          {num: 750, text: "Est. Oriente/Algés"}
        ],
        list3: [
          {num: 3, text: "Charneca/Bairro de Santa Cruz"},
          {num: 64, text: "Av. Colégio Militar/Damaia"},
          {num: 729, text: "B. Padre cruz/Algés"},
          {num: 765, text: "Colégio Militar/R. João Ortigão Ramos"},
          {num: 767, text: "C. Mártires da Pátria/Est. Damaia"},
          {num: 799, text: "Colégio Militar/Alfragide Norte"}
        ],
        list4: [
          {num: 210, text: "Lisboa (Colégio Militar) - Caneças (Jardim)"}
        ],
        list5: [
          {num: 101, text: "Massamá (Casal do Olival) - Lisboa (Colégio Militar)"},
          {num: 128, text: "Casal Da Mira (Dolce Vita) - Lisboa (Colégio Militar"},
          {num: 142, text: "Casal Da Mira (Dolce Vita) - Lisboa (Colégio Militar)"},
          {num: 163, text: "Massamá (Casal do Olival) - Lisboa (Colégio Militar)"}
        ]
      }
    }
  }
</script>

<style scoped>
  .box{
    height: calc(100vh - 80px);
    background-color: #060518;
  }

  .box-inicio{
    height: 328px;
    background-image: url("../assets/como-chegar.jpg");
      background-size: 100%;
  }

  .azeret{
    font-family: 'Azeret Mono';
    font-style: normal;
  }

  .inter{
    font-family: 'Inter';
    font-style: normal;
  }

  .text{
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
  }
  .page-title{
    font-weight: 600;
    font-size: 30px;
    line-height: 125%;
    color: #F9FAFC;
  }

  .page-subtitle{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #E43E2B;
  }

  .text-1{
    font-weight: 500;
    font-size: 14px;
    line-height: 125%;
    color: #F9FAFC;
  }

  .header-text{
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    text-transform: uppercase;
    font-feature-settings: 'case' on;
    color: #141414;
  }

  .btn-list{
    width: 40px;
    height: 40px;
    background: #F9D529;

    font-family: 'Azeret Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    font-feature-settings: 'case' on;
    color: #006EA6 !important;
  }

  .section-text{
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    font-feature-settings: 'case' on;
    color: #141414;
  }

  .text-list-item{
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    font-feature-settings: 'case' on;
    color: #1C2026;
  }

  .btn-list2{
    width: 40px;
    height: 40px;
    background: rgba(37, 58, 124, 0.12);

    font-family: 'Azeret Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    font-feature-settings: 'case' on;
    color: #D12727 !important;
  }

</style>