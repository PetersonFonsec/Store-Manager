<template>
  <v-app>

    <particleBG height="100%" bg-fixo />
    <router-view></router-view>

  </v-app>
</template>

<script>
  import  '@/css/animate.css'
  import Menu from '@/components/template/Menu/menu'
  import particleBG from '@/components/template/Menu/backGroundParticle'
  import btnFlutuante from '@/components/template/botao_Flutuante'
  import Login  from './components/Login'

  export default {
    name: 'App',
    components: {
      Login,
      particleBG,
      Menu,
      btnFlutuante
    },
    data(){
      return{
        Logado: false
      }
    },
  }
</script>
<style>
  [ bg-fixo ]{
    position: absolute;
    z-index: 0;
  }
  [ zindex ]{
    z-index: 1;
  }
</style>