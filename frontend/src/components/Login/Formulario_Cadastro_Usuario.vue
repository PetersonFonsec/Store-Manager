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

                        <v-flex xs12 sm6 >
                            <v-text-field v-model="usuario.nome"
                                label="Nome"
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
                                type="password"
                                required />
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
export default {
    data(){
        return{
            dialog: false,
            estados: [ 'SP', 'RJ', 'ES', 'MG'],
            usuario : {},
        }        
    },
    methods: {
        async salvar(){            
            this.$router.push({path: '/Dashboad'});
        }
    }
}
</script>