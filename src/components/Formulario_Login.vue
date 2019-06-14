<template>
    <div>
        <v-card id="Formulario_login">
            <v-layout wrap style="flex-direction: column;">

                <v-card-title xs12>
                    <h1>Login</h1>
                </v-card-title>

                <v-form v-model="valid">
                    <v-flex xs12>
                        <v-text-field
                            label="Usuário"
                            required/>
                    </v-flex>

                    <v-flex xs12>
                        <v-text-field
                            label="senha"
                            :append-icon=" mostrarSenha ? 'visibility' : 'visibility_off'"
                            :type=" mostrarSenha ? 'text' : 'password'"
                            @click:append="mostrarSenha = !mostrarSenha"
                            required/>
                    </v-flex>

                </v-form>
            </v-layout>
            <v-layout style="justify-content: space-evenly;">
                <v-flex xs12 md5>
                    <v-btn color="success" block @click="logar"> Entrar </v-btn>
                </v-flex>

                <v-flex xs12 md5>
                    <v-btn color="primary" block> Criar conta </v-btn>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                valid: false,
                mostrarSenha: false
            }
        },
        methods:{
            logar(){
                this.$emit('Logar' , true)
            }
        }
    }
</script>

<style scoped>
    #Formulario_login{
        width: 30%;
        margin: 10% auto;
        padding: 20px;
    }
</style>
