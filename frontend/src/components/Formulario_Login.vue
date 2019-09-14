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
                            v-model="user.login"
                            required/>
                    </v-flex>

                    <v-flex xs12>
                        <v-text-field
                            label="senha"
                            v-model="user.password"
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
                    <FormularioCadastro />
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
    import FormularioCadastro from './template/Login/Formulario_Cadastro_Usuario';
    import Axios from "axios";
    export default {
        components: { FormularioCadastro },
        data(){
            return{
                valid: false,
                mostrarSenha: false,
                user: {},
            }
        },
        methods:{
            async logar(){
                const resp = await Axios.post("http://localhost:3000/auth", this.user);
                localStorage.setItem("token", `Bearer ${resp.data.token}`);
                localStorage.setItem("_id", resp.data[0]._id);
                this.$router.push({path: '/Dashboad'});
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
