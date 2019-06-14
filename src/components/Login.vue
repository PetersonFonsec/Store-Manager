<template>
    <div id="Login">
        <particleBG height="100%" bg-fixo />
        <Formulario zindex @Logar="logar"/>
    </div>
</template>

<script>
    import particleBG from './template/Menu/backGroundParticle'
    import Formulario from './Formulario_Login'
    export default {
        components:{ 
            Formulario,
            particleBG
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
