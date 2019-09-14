<template>
    <div id="Config">
        <v-card>
            <v-card-title>
                <v-tabs v-model="tela">
                    <v-tab href="#sistema" ripple>Configurações do sistema</v-tab>
                    <v-tab href="#usuario" >Configurações da conta</v-tab>
                </v-tabs>
            </v-card-title>

            <v-tabs-items v-model="tela">
                <v-tab-item value="sistema">
                    <FormularioSistema />
                </v-tab-item>

                <v-tab-item value="usuario">
                     <FormularioUsuario />
                </v-tab-item>
            </v-tabs-items>    

        </v-card>
    </div>
</template>

<script>
    import FormularioSistema from "./template/Config/Formulario_Sistema";
    import FormularioUsuario from "./template/Config/Formulario_Usuario";

    export default {
        components: { 
            FormularioSistema,
            FormularioUsuario
        },
        data(){
            return {
                tela:'sistema',                
            }
        },
    }
</script>

<style>
    #Config{
        width: 50%;
        margin: auto;
    }
</style>
