<template>
    <div id="Formulario_Cadastro">
        <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" block dark v-on="on">
                    Criar conta
                </v-btn>
            </template>

            <v-card>
                <v-container grid-list-md id='Formulario_Usuario' >
                    <v-layout wrap>   

                        <v-flex xs12>
                            <h3>Apresentação</h3>
                        </v-flex>

                        <v-flex xs12 sm6 >
                            <v-text-field v-model="usuario.nome"
                                label="Nome"
                                required />
                        </v-flex>
                        
                        <v-flex xs12 sm6 >
                            <v-text-field v-model="usuario.sobrenome"
                                label="Sobrenome"
                                required />
                        </v-flex>

                        <v-flex xs12>
                            <h3>Contato</h3>
                        </v-flex>

                        <v-flex xs12 md3>
                            <v-text-field v-model="usuario.telefone"
                                label="Telefone"
                                v-mask="'(##) ####-####'"
                                placeholder="(66) 6666-6666"
                                required />
                        </v-flex>

                        <v-flex xs12 md3>
                            <v-text-field v-model="usuario.celular"
                                label="Celular"
                                v-mask="'(##) # ####-####'"
                                placeholder="(66) 9 6666-6666"
                                required />
                        </v-flex>

                        <v-flex xs12 md6 >
                            <v-text-field v-model="usuario.email"
                                label="Email"
                                required />
                        </v-flex>

                        <v-flex xs12 md12 >
                            <v-text-field v-model="usuario.password"
                                label="password"
                                required />
                        </v-flex>

                        <v-flex xs12>
                            <h3>Dados adicionais</h3>
                        </v-flex>

                        <v-flex xs6 sm6 md4>
                            <v-text-field v-model="usuario.dataNacimento"
                                label="Data de Nascimento" 
                                v-mask="'##/##/####'" 
                                placeholder="66/66/6666"
                                required></v-text-field>
                        </v-flex>

                        <v-flex xs6 sm6 md4>
                            <v-text-field v-model="usuario.cpf"
                                label="Cpf" 
                                v-mask="'###.###.###-##'" 
                                placeholder="666.666.666-66"
                                ></v-text-field>
                        </v-flex>

                        <v-flex xs6 sm6 md4>
                            <v-text-field v-model="usuario.rg"
                                label="Rg" 
                                v-mask="'##.###.###-#'" 
                                placeholder="666.666.666-66"
                                ></v-text-field>
                        </v-flex>
                        
                        <v-flex xs12>
                            <h3>Endereço</h3>
                        </v-flex>

                        <v-flex xs6 sm6 md4 lg3>
                            <v-text-field v-model="usuario.cep"
                                label="cep" 
                                v-mask="'#####-###'" 
                                placeholder="66666-666"
                                required />
                        </v-flex>

                        <v-flex xs12 sm12 md6 lg9>
                            <v-text-field v-model="usuario.municipio"
                                label="Municipio" />
                        </v-flex>

                        <v-flex xs12 sm12 md6 lg10>
                            <v-text-field v-model="usuario.rua"
                                label="Rua" />
                        </v-flex>
                        
                        <v-flex xs6 sm4 lg2>
                            <v-select v-model="usuario.estado"
                                label="estado" 
                                :items="estados" />
                        </v-flex>

                        <v-flex xs12 class="text-xs-center">
                            <v-btn color="success" @click="salvar"> Salvar</v-btn>
                        </v-flex>

                    </v-layout>
                </v-container>    
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from "axios";
import dotenv from "dotenv/config";
import vueRouter from "vue-router";
export default {
    data(){
        return{
            dialog: false,
            estados: [
                'SP',
                'RJ',
                'ES',
                'MG',
            ],
            usuario : {},
        }        
    },
    methods: {
        async salvar(){
            const resp = await axios.post(`http://localhost:3000/auth/include`, this.usuario);
            const token = `Bearer ${resp.data.token}`;
            
            localStorage.setItem("token", token);
            localStorage.setItem("_id", resp.data._id);
            this.$router.push({path: '/Dashboad'});
        }
    }
}
</script>

<style>

</style>
