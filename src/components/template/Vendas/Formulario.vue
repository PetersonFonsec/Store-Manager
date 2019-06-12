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
                    <span class="headline">Realizar uma venda</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-form v-model="valid">
                            <v-layout wrap>
                                <v-flex xs12 >
                                    <v-text-field 
                                        v-model="Venda.cliente"
                                        label="Nome do cliente*"
                                        :rules="validaNome"
                                        :counter="30"                            
                                        required />
                                </v-flex>
                            
                                <v-flex xs6 sm4>
                                    <v-text-field 
                                        v-model="Venda.data"
                                        :rules="validaData"
                                        label="Data da Venda*" 
                                        v-mask="'##/##/####'"
                                        required/>
                                </v-flex>

                                <v-flex xs6 sm4>
                                    <v-text-field 
                                        v-model="Venda.total"
                                        :rules="validaData"
                                        label="Total da venda*" 
                                        v-money="ruleMoney"
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
            validaData: [ txt => !!txt || 'Campo Nome é obrigatório' ] ,
            Produtos: [ 'Bebida', 'Laticios', 'Medicamentos', 'Venda de Limpesa' ],
            ProdutosVendidos: [],
            ruleMoney:{
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                suffix: '',
                precision: 2,
                masked: false
            },
            Venda:{
                cliente:'',
                data: this.hojeString(),
                Total: 0,
            },
        }
    },
    methods:{
        ajustaValor: valor => `${valor}`.replace( /\./g, '' ).replace( /,/g, '.' ),
        hojeString: () => new Date()
                            .toISOString()
                            .substr(0, 10)
                            .split('-')
                            .reverse()
                            .join('-'), 
        limparVenda(){
            this.Venda = {
                cliente:'',
                data: this.hojeString(),
                Total: 0,
            }
        },
        salvar(){

        }
    }
}
</script>

<style></style>