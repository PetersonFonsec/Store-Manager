<template>
    <div id="Config">
        <v-card>
            <v-card-title>
                <!-- <h2>Configurações do sistema</h2> -->
                <v-tabs v-model="tela">
                    <v-tab href="#sistema" ripple>Configurações do sistema</v-tab>
                    <v-tab href="#usuario" >Configurações da conta</v-tab>
                </v-tabs>
            </v-card-title>

            <v-tabs-items v-model="tela">
                <v-tab-item value="sistema">
                    <v-container grid-list-md >
                        <v-layout wrap>   
                            
                            <v-flex xs12>
                                <v-text-field v-model="nomeEmpresa" label="Nome da empresa"></v-text-field>
                            </v-flex>
                            
                            <v-flex xs12 sm10>
                                <v-text-field label="logo da empresa"></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm2 >
                                <img style="margin: auto;" src="@/assets/logo.png" width="50px" height="50px" />
                            </v-flex>

                            <v-flex xs12 sm2 >
                                <v-btn color="success" @click="upload">
                                    upload logo
                                    <v-icon right dark> cloud_upload </v-icon>
                                </v-btn>
                                <input type="file" v-show="false" id="upload_logo">
                            </v-flex>
                            
                            <v-flex xs12 />

                            <v-flex xs12 sm2 >
                                <v-switch
                                    v-model="animacaoBG"
                                    label="Animação de fundo" />
                            </v-flex>
                            
                            <v-flex xs12 sm2 >
                                <v-switch
                                    v-model="animacaoTransicao"
                                    label="Tranzição entre telas" />
                            </v-flex>

                        </v-layout>
                    </v-container>    
                </v-tab-item>

                <v-tab-item value="usuario">
                    <v-container grid-list-md >
                        <v-layout wrap>   
                            
                            <v-flex xs12>
                                <v-text-field v-model="nomeEmpresa" label="Nome da empresa"></v-text-field>
                            </v-flex>
                            
                            <v-flex xs12 sm10>
                                <v-text-field label="logo da empresa"></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm2 >
                                <img style="margin: auto;" src="@/assets/logo.png" width="50px" height="50px" />
                            </v-flex>

                            <v-flex xs12 sm2 >
                                <v-btn color="success" @click="upload">
                                    upload logo
                                    <v-icon right dark> cloud_upload </v-icon>
                                </v-btn>
                                <input type="file" v-show="false" id="upload_logo">
                            </v-flex>
                            
                            <v-flex xs12 />

                            <v-flex xs12 sm2 >
                                <v-switch
                                    v-model="animacaoBG"
                                    label="Animação de fundo" />
                            </v-flex>
                            
                            <v-flex xs12 sm2 >
                                <v-switch
                                    v-model="animacaoTransicao"
                                    label="Tranzição entre telas" />
                            </v-flex>

                        </v-layout>
                    </v-container>    
                </v-tab-item>
            </v-tabs-items>    

        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tela:'sistema',
            config: '',
            animacaoBG:  this.$store.state.sistema.particleJS,
            animacaoTransicao: this.$store.state.sistema.animate,
            nomeEmpresa: this.$store.state.empresa.titulo,
        }
    },
    methods:{
        upload(){
            document.querySelector('#upload_logo').click()
        }
    }
}
</script>

<style>
    #Config{
        /* width: 90%; */
        margin: auto;
    }
</style>
