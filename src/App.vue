<template>
  <v-app>    

    <template v-if="Logado">
      <particleBG bg-fixo height="'500px'"/>
      <Menu zindex/>
      <btnFlutuante zindex/>
      
      <transition mode="out-in"
          enter-active-class="animated slideInUp"  
          leave-active-clasnos="animated slideOutBottom">
            <router-view/>
      </transition>
    </template>

    <template v-else>
      <Login @Logar='Logado = true '/>
    </template>   

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