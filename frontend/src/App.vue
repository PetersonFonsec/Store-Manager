<template>
  <v-app>

    <particleBG height="100%" bg-fixo />

    <router-view></router-view>

  </v-app>
</template>

<script>
  import { mapState } from 'vuex'
  import particleBG from '@/components/Menu/backGroundParticle'

  export default {
    name: 'App',
    components: { particleBG },
    computed: {
      ...mapState(['usuarioEstaLogado'])
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