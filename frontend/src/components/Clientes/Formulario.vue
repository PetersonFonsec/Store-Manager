<template>
    <div id="formulario">
        <v-dialog v-model="dialog" max-width="600px">
        
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="ml-3" v-on="on">
                    <v-icon>add</v-icon>
                </v-btn>
            </template>

            <v-card>

                <v-card-title>
                    <span class="headline">Cadastro de Clientes</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 >
                                    <v-text-field 
                                        v-model="cliente.nome"
                                        label="Nome do Cliente*"
                                        :rules="campoObrigatorio"
                                        :counter="30"                            
                                        required />
                                </v-flex>

                                <v-flex xs12 sm6>
                                    <v-text-field 
                                        v-model="cliente.email"
                                        type="email"
                                        label="Email*"
                                        :rules="campoObrigatorio"
                                        required/>
                                </v-flex>

                                <v-flex xs12 sm6>
                                    <v-text-field 
                                        v-model="cliente.telefone"
                                        :rules="validTelefone"
                                        placeholder="(##) ####-####"
                                        v-mask="'(##) ####-####'"
                                        label="Telefone"
                                        required/>
                                </v-flex>

                                <v-flex xs12 sm6>
                                    <v-text-field 
                                        v-model="cliente.celular"
                                        :rules="validCelular"
                                        placeholder="(##) # ####-####"
                                        v-mask="'(##) # ####-####'"
                                        label="Celular"                     
                                        required/>
                                </v-flex>
                            </v-layout>
                    </v-container>
                    <small>* indica campos obrigatórios</small>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">Fechar</v-btn>
                    <v-btn color="primary" text @click="criarCliente">Salvar</v-btn>
                </v-card-actions>
                
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { novoCliente } from '@/graphql/Cliente'
import { mask } from 'vue-the-mask'

export default {
    directives: { mask },
    data(){
        return {
            dialog: false,
            valid: false,
            validTelefone: [ numero => !!numero || 'telefone inválido'],
            validCelular:  [ numero => !!numero || 'celular inválido' ],
            campoObrigatorio: [ txt => !!txt || 'Campo é obrigatório' ],
            cliente:{},
        }
    },
    methods:{
        validCampos(){
            return true
        },
        async criarCliente(){
            
            if( this.validCampos() ) return null

            const result = await this.$api.mutate({
                mutation: novoCliente,
                variables: {
                    dados: { ...this.cliente }
                }
            })

            if(result.data.novoCliente){
                this.$emmit('reload')
            }

            this.dialog = false
        }
    }
}
</script>

<style></style>
