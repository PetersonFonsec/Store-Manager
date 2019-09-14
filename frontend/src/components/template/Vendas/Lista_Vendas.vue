<template>
    <v-card>

        <v-card-title>
            <h1> Vendas </h1>
            
            <v-spacer></v-spacer>

            <v-text-field v-model="search" append-icon="search" 
                label="Buscar" single-line hide-details>
            </v-text-field>

            <Formulario class='mt-3'/>
        </v-card-title>

        <v-data-table :headers="headers" :items="vendas" :search="search">

            <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.id }}</td>
                <td class="text-xs-left">{{ props.item.cliente }}</td>
                <td class="text-xs-left">{{ props.item.total }}</td>
                <td class="text-xs-left">{{ props.item.data }}</td>
                <td class="text-xs-left">
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
        props: [ 'vendas' ],
        data(){
            return{
                search: '',            
                headers: [
                            { sortable: true, value:'id',      text: 'Código',width:'10%'},
                            { sortable: true, value:'cliente', text:'Cliente',width:'10%'},
                            { sortable: true, value:'data',    text:'Data'   ,width:'10%'},
                            { sortable: true, value:'total',   text:'Total'  ,width:'10%'},
                            { sortable: true, value:'Acoes',   text:''       ,width:'10%'},
                        ],
            }
        }
    }
</script>
