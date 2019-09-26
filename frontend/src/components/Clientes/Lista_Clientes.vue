<template>
    <v-card>
        <v-card-title>
            <h1> Clientes </h1>
            
            <v-spacer></v-spacer>

            <v-text-field v-model="search" append-icon="search" 
                label="Buscar" single-line hide-details>
            </v-text-field>

            <Formulario class='mt-3'/>
        </v-card-title>

        <v-data-table :headers="headers" :items="clientes" :search="search">

            <template v-slot:items="props">

                <td class="text-xs-left" width="10%">{{ props.item.id }}</td>
                <td class="text-xs-left" width="20%">{{ props.item.nome }}</td>
                <td class="text-xs-left" width="20%">{{ props.item.email }}</td>
                <td class="text-xs-left" width="20%">{{ props.item.telefone }}</td>
                <td class="text-xs-left" width="20%">{{ props.item.celular }}</td>

                <td class="text-xs-center" width="25%">
                    <v-btn color="error" @click="removerCliente(props.item.id)">
                        <v-icon>delete</v-icon>
                    </v-btn>

                    <v-btn color="info" @click="alterarCliente(props.item.id)">
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
    props: [ 'clientes' ],
    data(){
        return{
            search: '',            
            headers: [
                { sortable: true, value:'id',       text: 'Código'   },
                { sortable: true, value:'nome',     text: 'Nome'     },
                { sortable: true, value:'email',    text: 'Email'    },
                { sortable: true, value:'telefone', text: 'Telefone' },
                { sortable: true, value:'celular',  text: 'Celular'  },
            ],
        }
    },
    methods:{
        removerCliente(){},
        alterarCliente(){}
    }
}
</script>