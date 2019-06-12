<template>
    <div id="formulario">
        <v-dialog v-model="dialog" max-width="600px">
        
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">
                    <v-icon>add</v-icon>
                </v-btn>
            </template>

            <v-card>

                <v-card-title>
                    <span class="headline">Cadastro de Clientes</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-form v-model="valid">
                            <v-layout wrap>
                                <v-flex xs12 >
                                    <v-text-field 
                                        v-model="Produto.nome"
                                        label="Nome do Produto*"
                                        :rules="validaNome"
                                        :counter="30"                            
                                        required></v-text-field>
                                </v-flex>
                            
                                <v-flex xs12 >
                                    <v-select
                                        :items="Categorias"
                                        label="Categoria*" 
                                        v-model="Produto.categoria"
                                        required ></v-select>
                                </v-flex>

                                <v-flex xs12 sm6>
                                    <v-text-field 
                                        v-model="Produto.preco_compra"
                                        v-money="rulesMoney"
                                        :rules="validaPreco"
                                        :counter="30"                            
                                        label="Preço de Compra*" 
                                        required/>
                                </v-flex>

                                <v-flex xs12 sm6>
                                    <v-text-field 
                                        v-model="Produto.preco_venda"
                                        v-money="rulesMoney"
                                        label="Preço de Venda*"
                                        :rules="validaPreco"
                                        :counter="30"                            
                                        required/>
                                </v-flex>
                            </v-layout>
                        </v-form>    
                    </v-container>
                    <small>* indica campos obrigatórios</small>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Fechar</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Salvar</v-btn>
                </v-card-actions>
                
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialog: false,
            valid: false,
            validaNome: [ txt => !!txt || 'Campo Nome é obrigatório' ] ,
            validaPreco:[ preco => !isNaN( this.ajustaValor( preco ) ) || 'Campo deve ser preenchido com números' ],
            Categorias: [ 'Bebida', 'Laticios', 'Medicamentos', 'Produto de Limpesa' ],
            Produto:{
                nome:'',
                preco_compra: 0,
                preco_venda: 0,
            },
            rulesMoney:{
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                suffix: '',
                precision: 2,
                masked: false
            },
        }
    },
    methods:{
        ajustaValor: valor => `${valor}`.replace( /\./g, '' ).replace( /,/g, '.' ),
        limparProduto(){
            this.Produto = {
                nome:'',
                preco_compra: 0,
                preco_venda: 0,
            }
        },
        salvar(){

        }
    }
}
</script>

<style></style>
