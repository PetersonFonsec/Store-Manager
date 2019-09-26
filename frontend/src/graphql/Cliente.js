import graphql from 'graphql-tag'

export const novoCliente = graphql`
    mutation novoCliente( $dados: ClienteInput! ){
        novoCliente( dados: $dados ){
            id nome email
        }
    }`

export const todosClientes = graphql`
    query clientes{
        clientes { id nome email telefone celular }
    }`

export const umCliente = graphql`
    query cliente( $filtro: ClienteFiltro! ){
        cliente( filtro: $filtro ){
            nome email telefone celular
        }
    }
`

export const alterarCliente = graphql`
    mutation alterarCliente(
        $filtro:ClienteFiltro 
        $dados: ClienteInput
     ){
        alterarCliente( filtro: $filtro dados: $dados  )
        { id nome email telefone celular }
    }
`