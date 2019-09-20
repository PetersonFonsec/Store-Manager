import Vue from 'vue'
import Router from 'vue-router'

const dashboad = () => import('./views/Dashboad')
const vendas   = () => import('./views/Venda')
const produtos = () => import('./views/Produto')
const clientes = () => import('./views/Cliente')
const config   = () => import('./views/Config')
const Login    = () => import('./views/Login')
const notFond  = () => import('./views/Cliente')

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