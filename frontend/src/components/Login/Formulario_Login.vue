<template>
    <div>
        <div class="container-error" :class="{ 'mostrar' : error.mostrar }" >
            <alert-error :mensagem="mensagemError" />
        </div>

        <v-card id="Formulario_login">
            <v-layout wrap style="flex-direction: column;">

                <v-card-title xs12>
                    <span class="title-login">Login</span>
                </v-card-title>

                <v-form v-model="valido">
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
    import { login } from '@/graphql/Usuario'
    import FormularioCadastro from '@/components/Login/Formulario_Cadastro_Usuario';
    import InputSenha from '@/components/Login/input-senha';
    import AlertError from '@/components/Login/alert_error';

    export default {
        components: { FormularioCadastro, InputSenha, AlertError },
        data(){
            return{
                valido: false,
                user: {},
                error:{
                    mostrar: false,
                    mensagem: ''
                }
            }
        },
        computed:{
            mensagemError(){
                return this.error.mensagem
            }
        },
        methods:{
            mostrarErro(){
                this.error.mostrar = true

                setTimeout( ()=> this.error.mostrar = false, 3000 )
            },
            async logar(){

                const { senha, email } = this.user

                if(!senha || !email){
                    
                    this.mostrarErro()

                    this.error.mensagem = 'Campo email e senha são obrigatórios'

                    return 
                }

                const result = await this.$api.query({
                    query: login,
                    variables: { senha, email }
                })

                if( result.data.login ){
                    
                    const { token } = result.data.login
                    
                    this.$store.commit('login', token )
                    
                    this.$router.push({path: '/Dashboad'});

                }else{

                    this.mostrarErro()

                    this.error.mensagem = result.errors[0].message

                }

            },
            setPassword(senha){
                this.user.senha = senha
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
    .container-error{
        width: 80%;
        position: absolute;
        top: -100px;
        left: 10%;
        transition: .4s linear all;
    }
    .container-error.mostrar{
        top: 0px;
    }
</style>
