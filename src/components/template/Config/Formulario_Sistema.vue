<template>
    <v-container grid-list-md id='Formulario_Sistema' >
        <v-layout wrap>   
            <v-flex xs12>
                <v-text-field 
                    v-model="EmpresaNome"
                        label="Nome da empresa"/>
            </v-flex>
            
            <v-flex xs12 sm10>
                <v-text-field
                    v-model="EmpresaPathLogo" 
                    label="logo da empresa"/>
                    
            </v-flex>

            <v-flex xs12 sm2 class="text-xs-center">
                <img style="margin: auto;" 
                    src="@/assets/logo.png"
                    width="50px"
                    height="50px" />
            </v-flex>

            <v-flex xs12 sm4 >
                <v-btn color="success"
                    @click="upload">
                    upload logo
                    <v-icon right dark> cloud_upload </v-icon>
                </v-btn>

                <input type="file"
                    v-show="false"
                    id="upload_logo">
            </v-flex>            

            <v-flex xs4 >
                <v-switch
                    v-model="SistemaAnimacaoBG"
                    label="Animação de fundo" />
            </v-flex>
            
            <v-flex xs4 >
                <v-switch
                    v-model="SistemaAnimacaoTransicao"
                    label="Tranzição entre telas" />
            </v-flex>
        </v-layout>
    </v-container>    
</template>

<script>
export default {
    computed:{
        SistemaAnimacaoBG:{
            get(){ return this.$store.state.Sistema.particleJS },
            set( Valor ){ this.$store.commit( 'setParticle', Valor ) },
        },
        SistemaAnimacaoTransicao:{
            get(){ return this.$store.state.Sistema.animate },
            set( Valor ){ this.$store.commit( 'setAnimate', Valor ) },
        },
        EmpresaNome:{
            get(){ return this.$store.state.Empresa.titulo },
            set( Valor ){ this.$store.commit( 'setTitulo', Valor ) },
        },
        EmpresaPathLogo:{
            get(){ return this.$store.state.Empresa.pathLogo },
            set( Valor ){ this.$store.commit( 'setPathLogo', Valor ) },
        },
    },
    methods:{
        upload(){
            document.querySelector('#upload_logo').click()
        }
    }
}
</script>