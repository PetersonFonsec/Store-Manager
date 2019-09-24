<template>
    <div id="Formulario_Cadastro">

        <v-dialog v-model="dialog" max-width="400px">

            <template v-slot:activator="{ on }">
                <v-btn color="primary" block dark v-on="on">
                    Criar conta
                </v-btn>
            </template>

            <v-card>
                <v-container grid-list-md id='Formulario_Usuario' >
                    <v-layout wrap>   

                        <v-flex xs12 sm6 >
                            <v-text-field v-model="usuario.nome" label="Nome" required />
                        </v-flex>

                        <v-flex xs12 md6 >
                            <v-text-field v-model="usuario.email" label="Email" required />
                        </v-flex>

                        <v-flex xs12 md12 >
                            <v-text-field v-model="usuario.senha"
                                label="password" type="password" required />
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
import { novoUsuario } from '@/graphql/Usuario'
export default {
    data(){
        return{
            dialog: false,
            usuario : {},
        }        
    },
    methods: {
        validCampos(){
            const { nome, email, senha } = this.usuario

            return nome && email && senha
        },
        async salvar(){

            // if( !this.validCampos() ) return null

            await this.$api.mutate(
                {
                    mutation: novoUsuario,
                    variables: {
                        dados: { ...this.usuario }
                    } 
            }).then( console.table ).catch( console.log )
            
        }
    }
}
</script>