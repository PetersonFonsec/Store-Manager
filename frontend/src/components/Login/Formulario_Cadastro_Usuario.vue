<template>
    <div id="Formulario_Cadastro">

        <v-dialog v-model="dialog" max-width="400px">

            <template v-slot:activator="{ on }">
                <v-btn color="primary" block dark v-on="on">
                    Criar conta
                </v-btn>
            </template>

            <v-card>
                <div class="container-error" :class="{ 'mostrar' : error.mostrar }" >
                    <alert-error :mensagem="mensagemError" />
                </div>

                <v-container grid-list-md id='Formulario_Usuario' >
                    <v-layout wrap>   

                        <v-flex xs12 sm6 >
                            <v-text-field v-model="usuario.nome" label="Nome" required />
                        </v-flex>

                        <v-flex xs12 md6 >
                            <v-text-field v-model="usuario.email" label="Email" required />
                        </v-flex>

                        <v-flex xs12 md12 >
                            <Input-Senha @setingPassword="setSenha"/>
                        </v-flex>

                        <v-flex xs12 md12 >
                            <Input-Senha 
                                label="Confirmar Senha"
                                @setingPassword="setConfirmarSenha"/>
                        </v-flex>

                        <v-flex xs12 class="text-xs-center">
                            <v-btn block color="success" @click="salvar"> Salvar</v-btn>
                        </v-flex>

                    </v-layout>
                </v-container>    
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
import InputSenha from '@/components/Login/input-senha';
import AlertError from '@/components/Login/alert_error';
import { novoUsuario } from '@/graphql/Usuario'
export default {
    components : {
        InputSenha,
        AlertError
    },
    data(){
        return{
            dialog: false,
            error:{
                mostrar: false,
                mensagem: ''
            },
            usuario : {},
        }        
    },
    computed:{
        mensagemError(){
            return this.error.mensagem
        }
    },
    methods: {
        mostrarErro(mensagem){
            this.error.mensagem = mensagem
            this.error.mostrar = true

            setTimeout( ()=> this.error.mostrar = false, 3000 )
        },
        validCampos(){

            if(!this.validCamposVazis())
                return this.mostrarErro('Preencha Todos os campos')

            if(!this.validSenhas())
                return this.mostrarErro('Senhas não conferem')

            return true
        },
        validSenhas(){
            const { senha, confirmarSenha } = this.usuario

            return  senha === confirmarSenha
        },
        validCamposVazis(){
            const { nome, email, senha, confirmarSenha } = this.usuario

            return nome && email && senha && confirmarSenha
        },
        setSenha(senha){
            this.usuario.senha = senha
        },
        setConfirmarSenha(senha){
            this.usuario.confirmarSenha = senha
        },
        async salvar(){

            if( !this.validCampos() ) return null

            const result = await this.$api.mutate(
                {
                    mutation: novoUsuario,
                    variables: {
                        dados: { ...this.usuario }
                    } 
                }
            )

            if(result.data.novoUsuario){
                
                const { token } = result.data.novoUsuario

                this.$store.commit('login', token)

                this.$route.push({ path: '/Login' })

            }else{
                this.mostrarErro(result.errors[0].mensage)
            }
            
        }
    }
}
</script>
<style scoped>
.container-error{
    width: 80%;
    margin: 0px auto;
    display: none;
    opacity: 0;
    transform: scale(0);
    transition: .4s linear all;
}
.container-error.mostrar{
    transform: scale(1);
    opacity: 1;
    display: block;
}
</style>