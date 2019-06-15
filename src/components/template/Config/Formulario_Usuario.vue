<template>
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

            <v-flex xs12>
                <h3>Dados adicionais</h3>
            </v-flex>

            <v-flex xs6 sm4 md3>
                <v-text-field v-model="usuario.dataNacimento"
                    label="Data de Nascimento" 
                    v-mask="'##/##/####'" 
                    placeholder="66/66/6666"
                    required></v-text-field>
            </v-flex>

            <v-flex xs6 sm4 md3>
                <v-text-field v-model="usuario.cpf"
                    label="Cpf" 
                    v-mask="'###.###.###-##'" 
                    placeholder="666.666.666-66"
                    ></v-text-field>
            </v-flex>

            <v-flex xs6 sm4 md3>
                <v-text-field v-model="usuario.rg"
                    label="Rg" 
                    v-mask="'##.###.###-#'" 
                    placeholder="666.666.666-66"
                    ></v-text-field>
            </v-flex>

            <v-flex xs6 sm4 md3 class="text-xs-center">
                <v-btn color="success" @click="salvar"> Salvar</v-btn>
            </v-flex>

        </v-layout>
    </v-container>    
</template>

<script>
    export default {
        data(){
            return {
                valid: false,
                usuario:{
                    sobrenome : this.$store.state.Usuario.sobrenome,
                    nome      : this.$store.state.Usuario.nome,
                    rg        : this.$store.state.Usuario.rg,
                    cpf       : this.$store.state.Usuario.cpf,
                    dataNacimento : this.$store.state.Usuario.dataNacimento,
                    email     : this.$store.state.Usuario.email,
                    celular   : this.$store.state.Usuario.celular,
                    telefone  : this.$store.state.Usuario.telefone,
                }
            }
        },
        methods:{
            salvar(){                
                this.$store.commit( 'setUpdateUser', this.usuario )
            },
            validacao(){
                return true
            }
        }
    }
</script>

<style>

</style>
