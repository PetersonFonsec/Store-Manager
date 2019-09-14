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
            path: '/',
            name: 'Login',
            component: Login,
            meta: { requiresAuth: false }
        },
        {
            path: '/Dashboad',
            component: dashboad,
            meta: { requiresAuth: true }
        },
        {
            path: '/Vendas',
            component :  vendas,
            meta: { requiresAuth: true }
        },
        {
            path: '/Produtos',
            component : produtos,
            meta: { requiresAuth: true }
        },
        {
            path: '/Clientes',
            component : clientes,
            meta: { requiresAuth: true }
        },
        {
            path: '/Config',
            component: config,
            meta: { requiresAuth: true }
        },
        {
            path: '*',
            component: notFond,
            meta: { requiresAuth: false }
        },        
    ],
})