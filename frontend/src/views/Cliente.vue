<template>
    <div id="Clientes">
        <Lista @reload="buscarClientes" :clientes="clientes"/>
    </div>
</template>

<script>
import Lista from '@/components/Clientes/Lista_Clientes'
import { todosClientes } from '@/graphql/Cliente'

export default {
    components: { Lista },
    name: 'Clientes',
    data(){
        return {
            clientes: [],
        }
    },
    methods:{
        async buscarClientes(){

            const result = await this.$api.query({ query: todosClientes })
 
            const { clientes } = result.data
            
            if( clientes ) this.clientes =  clientes
            
        }
    },
    async mounted(){
        await this.buscarClientes()
    }
}
</script>

<style>
    #Clientes{
        width: 90%;
        margin: 0 auto;
    }
</style>
