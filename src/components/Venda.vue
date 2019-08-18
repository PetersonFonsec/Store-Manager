<template>
    <div id="Vendas">
        <Menu></Menu>
        <Lista :vendas="vendas"/>
    </div>
</template>

<script>
    import Lista from './template/Vendas/Lista_Vendas'
    import Menu from "./template/Menu/menu";

    export default {
        components: { Lista, Menu },
        data(){
            return{
                vendas:[
                            {
                                id: '001',
                                cliente: 'pizza',
                                data: 1,
                                total: 1.5,
                            },
                            {
                                id: '002',
                                cliente: 'coca',
                                data: 0.1,
                                total: 1.5,
                            },
                            {
                                id: '003',
                                cliente: 'refri',
                                data: 10,
                                total: 1.5,
                            },
                            {
                                id: '004',    
                                cliente: 'pastel',
                                data: 5,
                                total: 1.5,
                            },
                            {
                                id: '005',    
                                cliente: 'cadeira',
                                data: 80,
                                total: 1.5,
                            },
                        ]
            }
        }
    }
</script>

<style scoped>
    #Vendas{
        width: 90%;
        margin: 0 auto;
        z-index: 5;
    }
</style>