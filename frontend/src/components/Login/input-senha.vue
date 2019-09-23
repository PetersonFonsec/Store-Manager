<template>
  <div class="container-input">
    <v-text-field
        required
        :label="label"
        :type="type"
        :append-icon="appendIcon"
        :placeholder="placeholder"
        @input="setValor"
        @click:append="mostrarSenha = !mostrarSenha"/>
  </div>
</template>

<script>
export default {
    props:{
        label: {
            type: String,
            default: 'Senha'
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    computed:{
        appendIcon(){
            return this.mostrarSenha ? 'visibility' : 'visibility_off'
        },
        type(){
            return this.mostrarSenha ? 'text' : 'password'
        },
    },
    data(){
        return {
            mostrarSenha: false,
        }
    },
    methods:{
        setValor(valor){
            this.$emit('setingPassword',valor)
        }
    }
}
</script>

<style>

</style>