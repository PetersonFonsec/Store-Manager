<template>
    <v-card>

        <v-card-title>
            <h3> Clientes </h3>
            
            <v-spacer></v-spacer>

            <v-text-field 
                v-model="search" 
                append-icon="search" 
                label="Buscar" 
                single-line 
                hide-details />

            <new-client class='mt-3'/>

        </v-card-title>

        <v-data-table :headers="headers" :items="clientes" :search="search">

            <template v-slot:item.action="{ item }">
                <div class="container-btn-actions">
                    <v-btn class="mr-3" color="error" @click="removerCliente(item.id)">
                        <v-icon>delete</v-icon>
                    </v-btn>

                    <edit-user :id="item.id"/>
                </div>
            </template>
            
            <template v-slot:no-data>
                <v-alert :value="true" color="error" icon="warning">
                    Desculpa, nada para mostar aqui :(
                </v-alert>
            </template>
            
            <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                    você procurou por "{{ search }}" nenhum resultado encontrado.
                </v-alert>
            </template>

        </v-data-table>
    </v-card>
</template>

<script>
import newClient from './Create_Cliente'
import editUser  from './Edit_cliente'

export default {
    components: { newClient, editUser },
    props: [ 'clientes' ],
    data(){
        return{
            search: '',
            headers: [
                { sortable: true,  value:'id',       text: 'Código'   },
                { sortable: true,  value:'nome',     text: 'Nome'     },
                { sortable: true,  value:'email',    text: 'Email'    },
                { sortable: true,  value:'telefone', text: 'Telefone' },
                { sortable: true,  value:'celular',  text: 'Celular'  },
                { sortable: false, value:'action',   text: 'Actions'  },
            ],
        }
    },
    methods: {
        reload(){
            this.$emit('reload')
        },
    }
}
</script>

<style scoped>
.container-btn-actions {
    display: flex;
}
</style>