<template>
    <div id="dashboad">
        <totalizador valor="2M" titulo="Pizza Calabreza">
          <i class="material-icons"> shopping_cart </i>  
        </totalizador>

        <totalizador valor="2M" titulo="Pizza troiana">
          <i class="material-icons"> shopping_cart </i>  
        </totalizador>

        <totalizador valor="2M" titulo="Pizza seila">
          <i class="material-icons"> shopping_cart </i>  
        </totalizador>
    </div>
</template>

<script>
import totalizador from './template/totalizadores'
export default {
    components : { totalizador }
}
</script>

<style>

</style>
