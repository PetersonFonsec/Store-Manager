<template>
  <v-app>
    
    <Menu zindex/>
    <particleBG bg-fixo/>

    <btnFlutuante zindex/>
    
    <transition mode="out-in" 
        enter-active-class="animated slideInLeft"  
        leave-active-class="animated slideOutLeft">
          <router-view/>
    </transition>

  </v-app>
</template>

<script>
  import  '@/css/animate.css'
  import Menu from '@/components/menu'
  import particleBG from '@/components/backGroundParticle'
  import btnFlutuante from '@/components/template/botao_Flutuante'

  export default {
    name: 'App',
    components: {
      particleBG,
      Menu,
      btnFlutuante
    }
  }
</script>
<style scoped>
  [ bg-fixo ]{
    position: absolute;
    z-index: 0;
  }
  [ zindex ]{
    z-index: 1;
  }
</style>