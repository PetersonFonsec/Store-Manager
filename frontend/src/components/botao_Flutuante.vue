<template>
   <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition">
        
        <template v-slot:activator>
          <v-btn v-model="fab" color="darken-2" dark fab>
            <v-icon class="correcao">account_circle</v-icon>
            <v-icon class="correcao">close</v-icon>
          </v-btn>
        </template>
        
        <v-btn fab dark small color="green">
          <!-- <v-icon>dashboard</v-icon> -->
          <router-link tag="span" to="/Dashboad">
            <v-icon>home</v-icon>
          </router-link> 
        </v-btn>

        <v-btn fab dark small color="indigo" >
          <router-link tag="span" to="/Config">
            <v-icon>settings</v-icon>
          </router-link> 
        </v-btn>

        <v-btn fab dark small color="red">
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-speed-dial>
</template>

<script>
export default {
    data(){
        return{
            direction: 'top',
            fab: false,
            fling: false,
            hover: true,
            tabs: null,
            top: false,
            right: true,
            bottom: true,
            left: false,
            transition: 'slide-y-reverse-transition'
        }
    }
}
</script>

<style scoped>
    .v-speed-dial {
      position: absolute;
    }
    .v-btn--floating {
      position: relative;
    }
    .correcao{
      position: absolute !important;
      top: -10px !important;
    }
</style>
