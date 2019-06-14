import Vue from 'vue'
import Router from 'vue-router'

const dashboad = () => import('./components/Dashboad')
const vendas   = () => import('./components/Venda')
const produtos = () => import('./components/Produto')
const clientes = () => import('./components/Cliente')
const config   = () => import('./components/Config')
const Login    = () => import('./components/Login')
const notFond  = () => import('./components/Cliente')

Vue.use( Router )

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Dashboad',
            component: dashboad
        },
        {
            path: '/Vendas',
            component :  vendas
        },
        {
            path: '/Produtos',
            component : produtos
        },
        {
            path: '/Clientes',
            component : clientes
        },
        {
            path: '/Config',
            component: config
        },
        {
            path: '/Config',
            component: config
        },
        {
            path: '*',
            component: notFond
        },        
    ],
})