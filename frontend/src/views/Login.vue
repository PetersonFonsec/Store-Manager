<template>
    <div id="Login">
        <Formulario zindex @Logar="logar"/>
    </div>
</template>

<script>
import Formulario from '@/components/Login/Formulario_Login'
export default {
    components:{ Formulario },
    methods:{
        logar(){
            
        }
    }
}
</script>

<style scoped></style>