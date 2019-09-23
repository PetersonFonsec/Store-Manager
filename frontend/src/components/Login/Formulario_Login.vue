<template>
    <div>
        <v-card id="Formulario_login">
            <v-layout wrap style="flex-direction: column;">

                <v-card-title xs12>
                    <span class="title-login">Login</span>
                </v-card-title>

                <v-form v-model="valid">
                    <v-flex xs12>
                        <v-text-field
                            label="Email"
                            v-model="user.email"
                            required/>
                    </v-flex>

                    <v-flex xs12>
                        <Input-Senha @setingPassword="setPassword"/>
                    </v-flex>

                </v-form>
            </v-layout>

            <v-layout style="justify-content: space-evenly;">

                <v-flex xs12 md5>
                    <v-btn color="success" block @click="logar"> Entrar </v-btn>
                </v-flex>

                <v-flex xs12 md5>
                    <Formulario-Cadastro />
                </v-flex>

            </v-layout>

        </v-card>
    </div>
</template>

<script>
    import FormularioCadastro from '@/components/Login/Formulario_Cadastro_Usuario';
    import InputSenha from '@/components/Login/input-senha';
    export default {
        components: { FormularioCadastro, InputSenha },
        data(){
            return{
                valid: false,
                user: {},
            }
        },
        methods:{
            logar(){
                this.$router.push({path: '/Dashboad'});
            },
            setPassword(senha){
                this.senha = senha
            }
        }
    }
</script>

<style scoped>
    #Formulario_login {
        width: 30%;
        margin: 10% auto;
        padding: 20px;
    }
    #Formulario_login .title-login {
        font-size: 30px;
    }
</style>
