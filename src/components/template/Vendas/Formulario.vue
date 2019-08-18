<template>
    <div id="formulario">
        <v-dialog v-model="dialog" max-width="60%">
        
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
                                        required />
                                </v-flex>
                            
                                <v-flex xs12 sm6 md4 lg2>
                                    <v-text-field 
                                        v-model="Venda.data"
                                        label="Data da Venda*" 
                                        v-mask="'##/##/####'"
                                        required/>
                                </v-flex>

                                <v-flex xs12 sm6 md4 lg2>
                                    <v-text-field 
                                        v-model="Venda.desconto"
                                        label="Desconto" 
                                        v-money="ruleDesconto"
                                        required/>
                                </v-flex>

                                <v-flex xs12 sm6 md4 lg2>
                                    <v-text-field 
                                        label="Total da venda*" 
                                        v-money="ruleMoney"
                                        id="total_venda"
                                        :value="Venda.total"
                                        disabled/>
                                </v-flex>

                                <v-flex xs12 sm12 md12 lg6>
                                    <v-text-field v-model="search" append-icon="search" 
                                        label="Buscar" single-line hide-details>
                                    </v-text-field>
                                </v-flex>

                                <v-flex xs12>
                                    <v-data-table 
                                        :headers="headers"
                                        :items="Produtos"
                                        :search="search">
                                        <template v-slot:items="props">
                                            <td class="text-xs-left"   width="40%"> {{ props.item.nome }}  </td>
                                            <td class="text-xs-center" width="20%">   
                                                 <v-text-field 
                                                    :value="props.item.preco_compra"
                                                    v-money="ruleMoney"
                                                    disabled/>
                                            </td>
                                            <td class="text-xs-center" width="20%">  
                                                <v-text-field 
                                                    :value="props.item.preco_venda"
                                                    v-money="ruleMoney"
                                                    disabled/>
                                            </td>
                                            <td class="text-xs-center" width="20%"> 
                                                <v-text-field             
                                                    :data-produtoId="props.item.id"
                                                    @change="addProduto( props.item.id )"
                                                    placeholder="Quantidade"/>
                                            </td>
                                        </template>
                                    </v-data-table>
                                </v-flex>
                            </v-layout>
                        </v-form>    
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Fechar</v-btn>
                    <v-btn color="blue darken-1" flat @click="salvar">Salvar</v-btn>
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
            search: '',            
            valid: false,
            headers: [
                { sortable: true, value:'nome', text:'Nome'},
                { sortable: true, value:'preco_compra', text:'Preço Compra'},
                { sortable: true, value:'preco_venda', text:'Preço Venda'},
                { sortable: true, value:'Quantidade', text:'Quantidade'},
            ],
            Produtos: [
                {
                    id: '001',
                    preco_compra: 20,
                    preco_venda: 1.5,
                    nome: 'pizza',
                },
                {
                    id: '002',
                    preco_compra: 20,
                    preco_venda: 1.5,
                    nome: 'coca',
                },
                {
                    id: '003',
                    preco_compra: 20,
                    preco_venda: 1.5,
                    nome: 'refri',
                },
                {
                    id: '004',    
                    preco_compra: 20,
                    preco_venda: 1.5,
                    nome: 'pastel',
                },
                {
                    id: '005',    
                    preco_compra: 20,
                    preco_venda: 1.5,
                    nome: 'cadeira',
                },
            ],
            ProdutosVendidos: [],
            ruleMoney:{
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                precision: 2,
            },
            ruleDesconto:{
                decimal: ',',
                thousands: '.',
                prefix: '',
                suffix: '%',
                precision: 2,
            },
            Venda:{
                cliente:'',
                data: this.hojeString(),
                total: 0,
                desconto: 0,
            },
            validaNome : [ txt => !!txt || 'Campo Nome é obrigatório' ] ,
            // [ valor => !isNaN( valor ) ]
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
                desconto: 0,
            }
        },
        salvar(){
            this.dialog = false
        },
        addProduto( id ){
            const quantidade = document.querySelector(`[ data-produtoId='${ id }' ]`).value
            
            if( quantidade > 0 ){
                const Produto = this.Produtos.filter( Produto => Produto.id == id )[0]
                
                this.Venda.total += ( Produto.preco_venda * quantidade )
                
            }
        }
    }
}
</script>

<style></style>