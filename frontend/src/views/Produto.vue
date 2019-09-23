<template>
    <div id="Produtos">
        <Menu></Menu>
        <Lista :produtos="produtos"/>
    </div>
</template>

<script>
    import Lista from '@/components/Produtos/Lista_Produtos'
    import Menu from "@/components/Menu/menu";

    export default {
        components: { Lista, Menu },
        data(){
            return{
                produtos:[
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
<style scoped>
    #Produtos{
        width: 90%;
        margin: 0 auto;
        z-index: 5;
    }
</style>