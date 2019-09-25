<template>
  <v-app>

    <particleBG :height="tamanhoBg" bg-fixo />

    <Menu/>

    <router-view />

  </v-app>
</template>

<script>
  import particleBG from '@/components/Menu/backGroundParticle'
  import Menu from "@/components/Menu/menu";
  import { mapState } from 'vuex'

  export default {
    name: 'App',
    components: { particleBG, Menu },
    computed: {
      
      ...mapState(['usuarioLogado']),
      
      tamanhoBg(){
        return this.usuarioLogado ? '50%' :  '100%'
      }
    }
  }
</script>

<style scoped>
  [ bg-fixo ]{
    position: absolute;
    z-index: 0;
  }
  [ zindex ]{
    z-index: 5;
  }
</style>