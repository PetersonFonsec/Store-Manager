<template>
    <div id="Clientes">
        <Lista :clientes="clientes"/>
    </div>
</template>

<script>
import Lista from '@/components/Clientes/Lista_Clientes'

export default {
    components: { Lista },
    data(){
        return{
            clientes:[
                {
                    codigo: '001',
                    preco_compra: 1,
                    preco_venda: 1.5,
                    nome: 'pizza',
                },
                {
                    codigo: '002',
                    preco_compra: 0.1,
                    preco_venda: 1.5,
                    nome: 'coca',
                },
                {
                    codigo: '003',
                    preco_compra: 10,
                    preco_venda: 1.5,
                    nome: 'refri',
                },
                {
                    codigo: '004',    
                    preco_compra: 5,
                    preco_venda: 1.5,
                    nome: 'pastel',
                },
                {
                    codigo: '005',    
                    preco_compra: 80,
                    preco_venda: 1.5,
                    nome: 'cadeira',
                },
            ]
        }
    },
}
</script>

<style>
    #Clientes{
        width: 90%;
        margin: 0 auto;
    }
</style>
