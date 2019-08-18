<template>
    <div id="Login">
        <Formulario zindex @Logar="logar"/>
    </div>
</template>

<script>
    import Formulario from './Formulario_Login'
    export default {
        components:{ 
            Formulario,
        },
        methods:{
            logar(){
                this.$emit('Logar' , true)
            }
        }
    }
</script>

<style>

</style>
