<template>
    <v-card>
        <v-card-title>
            <h1> Produtos </h1>
            
            <v-spacer></v-spacer>

            <v-text-field v-model="search" append-icon="search" 
                label="Buscar" single-line hide-details>
            </v-text-field>

            <Formulario class='mt-3'/>
        </v-card-title>

        <v-data-table :headers="headers" :items="produtos" :search="search">

            <template v-slot:items="props">
                <td class="text-xs-left" width="10%">{{ props.item.codigo }}</td>
                <td class="text-xs-left" width="20%">{{ props.item.nome }}</td>
                <td class="text-xs-left" width="20%">{{ props.item.preco_venda }}</td>
                <td class="text-xs-left" width="20%">{{ props.item.preco_compra }}</td>
                <td class="text-xs-left" width="23%">
                    <v-btn color="error">
                        <v-icon>delete</v-icon>
                    </v-btn>

                    <v-btn color="info">
                        <v-icon>edit</v-icon>
                    </v-btn>
                </td>
            </template>
            
            <template v-slot:no-data>
                <v-alert :value="true" color="error" icon="warning">
                    Sorry, nothing to display here :(
                </v-alert>
            </template>
            
            <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                </v-alert>
            </template>

        </v-data-table>

    </v-card>
</template>

<script>
import Formulario from './Formulario'
export default {
    components: { Formulario },
    props: [ 'produtos' ],
    data(){
        return{
            search: '',            
            headers: [
                        { sortable: true, value:'codigo',  text: 'Código'},
                        { sortable: true, value:'nome',    text:'Nome'},
                        { sortable: true, value:'preco_venda',   text:'Preço Venda'},
                        { sortable: true, value:'preco_compra',  text:'Preço Compra'},
                        { sortable: true, value:'acoes',  text:''},
                    ],
        }
    }
}
</script>