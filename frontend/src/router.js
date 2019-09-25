import Vue from 'vue'
import Router from 'vue-router'

const dashboad = () => import('./views/Dashboad')
const vendas   = () => import('./views/Venda')
const produtos = () => import('./views/Produto')
const clientes = () => import('./views/Cliente')
const Login    = () => import('./views/Login')

Vue.use( Router )

const routes =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/Login',
            name: 'Login',
            component: Login,
            meta: { requiresAuth: false }
        },
        {
            path: '/Dashboad',
            name: 'Dashboad',
            component: dashboad,
            meta: { requiresAuth: true }
        },
        {
            path: '/Vendas',
            name: 'Vendas',
            component :  vendas,
            meta: { requiresAuth: true }
        },
        {
            path: '/Produtos',
            name: 'Produtos',
            component : produtos,
            meta: { requiresAuth: true }
        },
        {
            path: '/Clientes',
            name: 'Clientes',
            component : clientes,
            meta: { requiresAuth: true }
        },
    ],
})

routes.beforeEach( (to, from, next) => {

    if(!to.meta.requiresAuth) return next()

    const token = localStorage.getItem('token')

    if(!token) return  routes.push({ path: "/Login"});

    // return tokenEhValido ? next() : routes.push({ path: "Login"});
    
    next()

})

export default routes