<template>
    <v-card>

        <v-card-title>
            <span class="headline">Cadastro de Clientes</span>
        </v-card-title>

        <v-card-text>
            <v-container grid-list-md>
                <v-form @submit.prevent="_submit">
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
                </v-form>
            </v-container>
            <small>* indica campos obrigatórios</small>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="cancelar">Fechar</v-btn>
            <v-btn color="primary" text>Salvar</v-btn>
        </v-card-actions>
        
    </v-card>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
    directives: { mask },
    props:{
        cliente:{
            type:Object,
            default: function(){
                return {
                    nome: '',
                    email: '',
                    telefone: '',
                    celular: '',
                }
            }
        }
    },
    data(){
        return {
            valid: false,
            validTelefone: [ numero => !!numero || 'telefone inválido'],
            validCelular:  [ numero => !!numero || 'celular inválido' ],
            campoObrigatorio: [ txt => !!txt || 'Campo é obrigatório' ],
        }
    },
    methods:{
        cancelar(){
            this.$emit('cancelarCliente')
        },
        validCampos(){
            return true
        },
        _submit(){
            this.$emit('submitCliente', this.cliente)
        },
    },

}
</script>