<template>
    <div id="formulario">
        <v-dialog v-model="dialog" max-width="600px">
        
            <template v-slot:activator="{ on }">
                 <v-btn color="info" @click="dialog = true">
                    <v-icon>edit</v-icon>
                </v-btn>
            </template>

            <p>
                Tem Certeza que deseja excluir  {{ cliente.nome }} ?
            </p>
            <v-button color="error"> Tenho Certeza </v-button>
            <v-button color="Primari"> Cancelar </v-button>
        </v-dialog>
    </div>
</template>

<script>
import { novoCliente } from '@/graphql/Cliente'
import Formulario from './Formulario'

export default {
    components : { Formulario },
    props:['id'],
    data(){
        return {
            dialog: false,
            cliente:{},
        }
    },
    methods:{
        async excluirClient(){
            
            const result = await this.$api.mutate({
                mutation: novoCliente,
                variables: {
                    dados: { ...this.cliente }
                }
            })

            if(result.data.novoCliente) this.$emmit('reload')

            this.dialog = false
        },
    }
}
</script>