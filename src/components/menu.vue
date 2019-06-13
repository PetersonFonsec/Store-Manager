<template>
    <div id="menu">
        <div id="logo">
            <img  src="@/assets/logo.png" alt="logoTipo">
            <h1> {{ titulo }} </h1>
        </div>

        <div id="menu-btn-group">
            <router-link tag="button" to="/Vendas">Venda</router-link>
            <router-link tag="button" to="/Produtos">Produto</router-link>
            <router-link tag="button" to="/Clientes">Cliente</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                titulo : this.$store.state.Empresa.titulo,
            }
        }
    }
</script>

<style scoped>
    #menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    #logo{
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    #logo img{
        cursor: pointer;
        width: 100px;
        height: 100px;
    }
    #logo h1{
        color: #fff;
        cursor: pointer;
    }
    #menu-btn-group{
        justify-content: space-evenly;
        display: flex;
        width: 40%;
    }
    #menu-btn-group button{
        cursor: pointer;
        color: #fff;
        border: none;
        background-color: rgba( 255, 255, 255, 0.0);
        padding: 5px 20px;
        border-radius: 5px;        
        transition: .4s;
        outline: none;
    }
    #menu-btn-group button:hover{
        background-color: rgba( 255, 255, 255, 0.3);
        transform: translateY(-5px);
    }
</style>
